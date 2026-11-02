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
 */

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
  const slug = path.split('/').pop()!.replace(/\.md$/, '')
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
    // 한국어 기준 대략 분당 500자
    readingMinutes: Math.max(1, Math.round(text.length / 500)),
    order: Number(data.order) || 0,
  }
}

export const allPosts: NewsPost[] = Object.entries(files)
  .map(([path, raw]) => toPost(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date) || a.order - b.order || a.slug.localeCompare(b.slug))

export function getPost(slug: string) {
  return allPosts.find((p) => p.slug === slug)
}

export const categoryLabels: Record<NewsCategory, string> = {
  news: 'News',
  event: 'Event',
  notice: '공지',
}

export function formatDate(date: string) {
  const d = new Date(`${date}T00:00:00`)
  if (Number.isNaN(d.getTime())) return date
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`
}
