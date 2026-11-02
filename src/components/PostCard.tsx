import { Link } from 'react-router-dom'
import { asset } from '../data/site'
import { categoryLabels, formatDate, type NewsPost } from '../lib/news'

type Props = { post: NewsPost; layout?: 'row' | 'tile' }

/** 'row'는 원본 블로그 목록처럼 이미지 왼쪽 + 글 오른쪽, 'tile'은 최근 게시물용 작은 카드 */
export default function PostCard({ post, layout = 'row' }: Props) {
  return (
    <article className={`post-card post-card-${layout}`}>
      <Link to={`/news/${post.slug}`} className="post-card-media" tabIndex={-1} aria-hidden="true">
        {post.cover ? <img src={asset(post.cover)} alt="" loading="lazy" /> : <div className="post-card-placeholder" />}
      </Link>
      <div className="post-card-body">
        <div className="post-meta">
          <span className={`post-badge badge-${post.category}`}>{categoryLabels[post.category]}</span>
          <span>{formatDate(post.date)}</span>
          {layout === 'row' && <span>· {post.readingMinutes}분 분량</span>}
        </div>
        <h3>
          <Link to={`/news/${post.slug}`}>{post.title}</Link>
        </h3>
        {layout === 'row' && <p>{post.summary}</p>}
      </div>
    </article>
  )
}
