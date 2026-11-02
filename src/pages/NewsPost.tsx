import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PostCard from '../components/PostCard'
import Markdown from '../components/Markdown'
import NotFound from './NotFound'
import { allPosts, categoryLabels, formatDate, getPost } from '../lib/news'

export default function NewsPost() {
  const { slug = '' } = useParams()
  const post = getPost(slug)
  if (!post) return <NotFound />

  const recent = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <PageHero title="Our News" variant="navy" />
      <section className="section section-muted">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/news">All Posts</Link>
          </nav>
          <article className="post-detail">
            <div className="post-meta">
              <span className={`post-badge badge-${post.category}`}>{categoryLabels[post.category]}</span>
              <span>{formatDate(post.date)}</span>
              <span>· {post.readingMinutes}분 분량</span>
            </div>
            <h1>{post.title}</h1>
            <Markdown>{post.body}</Markdown>
          </article>

          {recent.length > 0 && (
            <div className="recent-posts">
              <div className="section-head">
                <h2>최근 게시물</h2>
                <Link to="/news" className="more-link">
                  전체 보기
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
