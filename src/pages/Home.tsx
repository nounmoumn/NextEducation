import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import AccentBar from '../components/AccentBar'
import PostCard from '../components/PostCard'
import { RingShape, RoundSquareShape, StepShape } from '../components/Shapes'
import { useInView } from '../hooks/useInView'
import { allPosts } from '../lib/news'
import { asset, site } from '../data/site'

export default function Home() {
  const latest = allPosts.slice(0, 4)
  const [welcomeRef, welcomeIn] = useInView<HTMLElement>()

  return (
    <>
      <PageHero size="tall" title={site.name} subtitle={site.tagline} />

      <section ref={welcomeRef} className={`section welcome-section${welcomeIn ? ' is-in' : ''}`}>
        <div className="container welcome">
          <div className="welcome-media">
            <Link to="/hub" className="welcome-image anim-reveal">
              <img src={asset('images/site/nehub-intro.png')} alt="미래교육허브(Next Education Hub) 소개 화면" />
            </Link>
            <RingShape className="shape shape-ring anim-glide-far" />
            <RoundSquareShape className="shape shape-square anim-glide-far" />
          </div>
          <div className="welcome-text">
            <StepShape className="shape shape-step anim-glide-far" />
            <h2 className="welcome-title anim-glide">
              <span className="welcome-en">Welcome to</span>
              <span className="welcome-ko">{site.name} !</span>
            </h2>
            <div className="welcome-body anim-glide anim-delay">
              <p>
                미래융합교육 연구소는 지능정보 사회에 핵심 개념인 융합을 기반으로 현실 세계에서 필요한 역량을 키우기 위한
                교육방법과 환경을 개인에 특성에 맞게 제공하는 것을 목표로 콘텐츠와 시스템을 연구 개발 합니다.
              </p>
              <p>
                특별히 우리는 디지털 네이티브 세대가 기존의 산업시대 교육 틀에 얽매이지 않고 자기 스스로 문제를 정의할 수
                있도록 지원 하며 전문가들은 이러한 세대가 정의한 문제를 존중하고 실제 해결할수 있는 솔류션을 같이 고민하고
                개발할 수 있는 환경과 커뮤니티를 구축 하고자 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <AccentBar />
          <div className="section-head">
            <h2 className="section-title">Latest News</h2>
            <Link to="/news" className="more-link">
              전체 보기 →
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
