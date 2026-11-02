import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PostCard from '../components/PostCard'
import Markdown from '../components/Markdown'
import NotFound from './NotFound'
import { useLang } from '../i18n/lang'
import { ui } from '../i18n/ui'
import { categoryLabels, formatDate, getPost, postsFor } from '../lib/news'

export default function NewsPost() {
  const { slug = '' } = useParams()
  const { lang, t } = useLang()
  const post = getPost(slug, lang)
  if (!post) return <NotFound />

  const recent = postsFor(lang)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)
  const koreanOnly = lang === 'en' && post.lang === 'ko'

  return (
    <>
      <PageHero title="Our News" variant="navy" />
      <section className="section section-muted">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/news">{t(ui.allPosts)}</Link>
          </nav>
          <article className="post-detail">
            <div className="post-meta">
              <span className={`post-badge badge-${post.category}`}>{t(categoryLabels[post.category])}</span>
              {koreanOnly && <span className="post-badge badge-lang">{t(ui.koreanOnly)}</span>}
              <span>{formatDate(post.date, lang)}</span>
              <span>· {t(ui.readingTime)(post.readingMinutes)}</span>
            </div>
            {koreanOnly && <p className="lang-notice">{t(ui.koreanOnlyNotice)}</p>}
            <div lang={post.lang}>
              <h1>{post.title}</h1>
              <Markdown>{post.body}</Markdown>
            </div>
          </article>

          {recent.length > 0 && (
            <div className="recent-posts">
              <div className="section-head">
                <h2>{t(ui.recentPosts)}</h2>
                <Link to="/news" className="more-link">
                  {t(ui.viewAll)}
                </Link>
              </div>
              <div className="tile-grid">
                {recent.map((p) => (
                  <PostCard key={p.slug} post={p} layout="tile" />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
