/**
 * EVENTS & NEWS 게시물 로더.
 *
 * DB 없이 `src/content/news/*.md` 파일을 빌드 시점에 읽어 게시물 목록을 만든다.
 * 파일 맨 위 frontmatter(--- 로 감싼 key: value)에 메타 정보를 적는다.
 *
 *   ---
 *   title: 게시물 제목
 *   date: 2023-05-24
 *   category: news          # news | event | notice (선택)
 *   order: 1                # 같은 날짜 안에서의 정렬 순서, 작을수록 위 (선택)
 *   cover: /images/news/xxx.png   # 선택
 *   summary: 목록에 보일 요약 (선택, 없으면 본문 앞부분 사용)
 *   ---
 *   본문(마크다운)
 *
 * 파일 이름(확장자 제외)이 URL slug가 된다: /news/<파일이름>
 *
 * 언어: 게시물은 사이트 번역과 따로 관리한다. 기본은 한국어 파일(<slug>.md)이고,
 * 영어판이 필요하면 같은 이름의 <slug>.en.md 를 추가한다 (date·order·cover는 한국어 파일을 따름).
 * 영어 화면에서 영어판이 없는 게시물은 한국어 원문을 그대로 보여 주고 '한국어' 표시를 붙인다.
 */

import type { Lang } from '../i18n/lang'

export type NewsCategory = 'news' | 'event' | 'notice'

export type NewsPost = {
  slug: string
  title: string
  date: string
  category: NewsCategory
  cover?: string
  summary: string
  body: string
  readingMinutes: number
  order: number
  /** 이 게시물 내용의 실제 언어 */
  lang: Lang
}

const files = import.meta.glob('../content/news/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {} as Record<string, string>, body: raw }
  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/)
    if (!m) continue
    data[m[1]] = m[2].replace(/\s+#.*$/, '').replace(/^["']|["']$/g, '').trim()
  }
  return { data, body: match[2].trim() }
}

function plainText(markdown: string) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function toPost(path: string, raw: string): NewsPost {
  const file = path.split('/').pop()!.replace(/\.md$/, '')
  const lang: Lang = file.endsWith('.en') ? 'en' : 'ko'
  const slug = file.replace(/\.en$/, '')
  const { data, body } = parseFrontmatter(raw)
  const text = plainText(body)
  const summary = data.summary || (text.length > 120 ? `${text.slice(0, 120)}...` : text)
  const category = (['news', 'event', 'notice'] as const).includes(data.category as NewsCategory)
    ? (data.category as NewsCategory)
    : 'news'
  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    category,
    cover: data.cover || undefined,
    summary,
    body,
    // 한국어는 분당 약 500자, 영어는 분당 약 200단어
    readingMinutes: Math.max(1, Math.round(lang === 'en' ? text.split(' ').length / 200 : text.length / 500)),
    order: Number(data.order) || 0,
    lang,
  }
}

const parsed = Object.entries(files).map(([path, raw]) => toPost(path, raw))
const englishBySlug = new Map(parsed.filter((p) => p.lang === 'en').map((p) => [p.slug, p]))

/** 한국어 게시물(기준 목록) — 날짜 최신순, 같은 날짜는 order 순 */
export const allPosts: NewsPost[] = parsed
  .filter((p) => p.lang === 'ko')
  .sort((a, b) => b.date.localeCompare(a.date) || a.order - b.order || a.slug.localeCompare(b.slug))

/** 화면 언어에 맞춘 게시물: 영어 화면이면 영어판이 있는 것만 영어로 바꾼다 */
function localize(post: NewsPost, lang: Lang): NewsPost {
  const en = lang === 'en' ? englishBySlug.get(post.slug) : undefined
  return en ? { ...en, date: post.date, order: post.order, cover: en.cover ?? post.cover, category: post.category } : post
}

export function postsFor(lang: Lang) {
  return allPosts.map((p) => localize(p, lang))
}

export function getPost(slug: string, lang: Lang = 'ko') {
  const post = allPosts.find((p) => p.slug === slug)
  return post && localize(post, lang)
}

export const categoryLabels: Record<NewsCategory, { ko: string; en: string }> = {
  news: { ko: 'News', en: 'News' },
  event: { ko: 'Event', en: 'Event' },
  notice: { ko: '공지', en: 'Notice' },
}

export function formatDate(date: string, lang: Lang = 'ko') {
  const d = new Date(`${date}T00:00:00`)
  if (Number.isNaN(d.getTime())) return date
  if (lang === 'en') return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`
}
