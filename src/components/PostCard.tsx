import { Link } from 'react-router-dom'
import { asset } from '../data/site'
import { useLang } from '../i18n/lang'
import { ui } from '../i18n/ui'
import { categoryLabels, formatDate, type NewsPost } from '../lib/news'

type Props = { post: NewsPost; layout?: 'row' | 'tile' }

/** 'row'는 원본 블로그 목록처럼 이미지 왼쪽 + 글 오른쪽, 'tile'은 최근 게시물용 작은 카드 */
export default function PostCard({ post, layout = 'row' }: Props) {
  const { lang, t } = useLang()
  // 영어 화면인데 영어판이 없는 게시물은 한국어 원문임을 표시
  const koreanOnly = lang === 'en' && post.lang === 'ko'

  return (
    <article className={`post-card post-card-${layout}`}>
      <Link to={`/news/${post.slug}`} className="post-card-media" tabIndex={-1} aria-hidden="true">
        {post.cover ? <img src={asset(post.cover)} alt="" loading="lazy" /> : <div className="post-card-placeholder" />}
      </Link>
      <div className="post-card-body">
        <div className="post-meta">
          <span className={`post-badge badge-${post.category}`}>{t(categoryLabels[post.category])}</span>
          {koreanOnly && <span className="post-badge badge-lang">{t(ui.koreanOnly)}</span>}
          <span>{formatDate(post.date, lang)}</span>
          {layout === 'row' && <span>· {t(ui.readingTime)(post.readingMinutes)}</span>}
        </div>
        <h3 lang={post.lang}>
          <Link to={`/news/${post.slug}`}>{post.title}</Link>
        </h3>
        {layout === 'row' && <p lang={post.lang}>{post.summary}</p>}
      </div>
    </article>
  )
}
