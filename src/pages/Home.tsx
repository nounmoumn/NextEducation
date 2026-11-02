import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import AccentBar from '../components/AccentBar'
import PostCard from '../components/PostCard'
import { RingShape, RoundSquareShape, StepShape } from '../components/Shapes'
import { useInView } from '../hooks/useInView'
import { postsFor } from '../lib/news'
import { asset, site } from '../data/site'
import { homeText } from '../data/home'
import { useLang } from '../i18n/lang'

export default function Home() {
  const { lang, t } = useLang()
  const latest = postsFor(lang).slice(0, 4)
  const [welcomeRef, welcomeIn] = useInView<HTMLElement>()

  return (
    <>
      <PageHero size="tall" title={t(site.name)} subtitle={t(site.tagline)} />

      <section ref={welcomeRef} className={`section welcome-section${welcomeIn ? ' is-in' : ''}`}>
        <div className="container welcome">
          <div className="welcome-media">
            <Link to="/hub" className="welcome-image anim-reveal">
              <img src={asset('images/site/nehub-intro.png')} alt={t(homeText.imageAlt)} />
            </Link>
            <RingShape className="shape shape-ring anim-glide-far" />
            <RoundSquareShape className="shape shape-square anim-glide-far" />
          </div>
          <div className="welcome-text">
            <StepShape className="shape shape-step anim-glide-far" />
            <h2 className="welcome-title anim-glide">
              <span className="welcome-en">{t(homeText.welcomeTo)}</span>
              <span className="welcome-ko">{t(homeText.welcomeName)}</span>
            </h2>
            <div className="welcome-body anim-glide anim-delay">
              {homeText.paragraphs.map((p) => (
                <p key={p.ko}>{t(p)}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <AccentBar />
          <div className="section-head">
            <h2 className="section-title">{t(homeText.latestNews)}</h2>
            <Link to="/news" className="more-link">
              {t(homeText.viewAll)}
            </Link>
          </div>
          <div className="post-list">
            {latest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
