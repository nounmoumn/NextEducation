import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import PostCard from '../components/PostCard'
import { useLang } from '../i18n/lang'
import { ui } from '../i18n/ui'
import { allPosts, categoryLabels, postsFor, type NewsCategory } from '../lib/news'

type Filter = 'all' | NewsCategory

export default function News() {
  const { lang, t } = useLang()
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')

  // 게시물이 있는 카테고리만 탭으로 노출
  const categories = useMemo(
    () => (Object.keys(categoryLabels) as NewsCategory[]).filter((c) => allPosts.some((p) => p.category === c)),
    [],
  )

  const posts = postsFor(lang).filter((p) => {
    if (filter !== 'all' && p.category !== filter) return false
    const q = query.trim().toLowerCase()
    return !q || p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)
  })

  return (
    <>
      <PageHero title="Our News" variant="navy" />
      <section className="section section-muted">
        <div className="container">
          <div className="news-intro">
            <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
              <rect x="6" y="10" width="36" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <path d="M6 18h36M16 6v8M32 6v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="17" cy="29" r="6" fill="none" stroke="#e8533f" strokeWidth="2.5" />
              <path d="M17 26v3l2 2" stroke="#e8533f" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p>{t(ui.newsIntro)}</p>
          </div>

          <div className="news-toolbar">
            <div className="news-tabs" role="tablist">
              <button role="tab" aria-selected={filter === 'all'} onClick={() => setFilter('all')}>
                {t(ui.allPosts)}
              </button>
              {categories.length > 1 &&
                categories.map((c) => (
                  <button key={c} role="tab" aria-selected={filter === c} onClick={() => setFilter(c)}>
                    {t(categoryLabels[c])}
                  </button>
                ))}
            </div>
            <input
              className="news-search"
              type="search"
              placeholder={t(ui.search)}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label={t(ui.searchPosts)}
            />
          </div>

          <div className="post-list">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
            {posts.length === 0 && <p className="empty">{t(ui.noPosts)}</p>}
          </div>
        </div>
      </section>
    </>
  )
}
