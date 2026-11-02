import type { ReactNode } from 'react'
import PageHero from '../components/PageHero'
import './Hub.css'
import AccentBar from '../components/AccentBar'
import ShowcaseCarousel from '../components/ShowcaseCarousel'
import { asset } from '../data/site'
import {
  audiences,
  goals,
  hubLinks,
  hubNotice,
  makeplayUrl,
  partners,
  tools,
} from '../data/hub'

/** "MakePlayAI" 로고 색 표기 (Make=빨강, Play=초록, AI/SW=파랑) */
function Brand({ name }: { name: string }) {
  const m = name.match(/^MakePlay(AI|SW)$/)
  if (!m) return <>{name}</>
  return (
    <span className="brand">
      <span className="brand-make">Make</span>
      <span className="brand-play">Play</span>
      <span className="brand-ai">{m[1]}</span>
    </span>
  )
}

/** 제품 화면이 없는 도구 카드에 쓰는 선 아이콘 */
function ToolIcon({ name }: { name?: 'book' | 'chat' }) {
  return (
    <svg className="tool-icon" viewBox="0 0 24 24" aria-hidden="true">
      {name === 'chat' ? (
        <>
          <path d="M21 12a8 8 0 0 1-11.7 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z" />
          <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
        </>
      ) : (
        <>
          <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4H9a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5h-6A1.5 1.5 0 0 1 2 16z" />
          <path d="M22 5.5A1.5 1.5 0 0 0 20.5 4H15a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5h6a1.5 1.5 0 0 0 1.5-1.5z" />
        </>
      )}
    </svg>
  )
}

function ExternalLink({ href, children, className = 'btn btn-primary' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  )
}

export default function Hub() {
  return (
    <>
      <PageHero title="미래교육허브" subtitle="AI를 직접 만들고, SW로 즐기면서 배우는 개방형 AI 교육 플랫폼" variant="teal" />

      {/* 소개 */}
      <section className="section">
        <div className="container hub-intro">
          <div>
            <AccentBar />
            <img className="hub-logo" src={asset('images/makeplay/logo.png')} alt="MakePlayAI" />
            <h2 className="hub-headline">
              AI를 직접 만들고
              <br />
              SW로 즐기면서 배우다
            </h2>
            <p className="hub-lead">
              미래교육허브는 <Brand name="MakePlayAI" />를 통해 누구나 무료로 AI를 배우는 공간입니다. 두 가지 핵심 도구{' '}
              <Brand name="MakePlayAI" />와 <Brand name="MakePlaySW" />로 AI를 이론이 아닌 실습으로 익히고, 직접 만든 모델로
              나만의 서비스를 완성합니다.
            </p>
            <p className="hub-notice">
              <strong>{hubNotice.status}</strong> · {hubNotice.launch}
            </p>
            <div className="btn-row">
              <ExternalLink href={makeplayUrl}>MakePlayAI 바로가기 ↗</ExternalLink>
              <ExternalLink href={hubLinks.service} className="btn btn-outline">
                서비스 소개
              </ExternalLink>
            </div>
          </div>
          <ShowcaseCarousel renderBrand={(b) => <Brand name={`MakePlay${b}`} />} />
        </div>
      </section>

      {/* 핵심 도구 */}
      <section className="section section-muted">
        <div className="container">
          <AccentBar center />
          <h2 className="section-title center">무엇을 할 수 있나요?</h2>
          <p className="section-lead center">
            공적 영역에서 누구나 쓸 수 있는 AI 학습·서비스 생성 도구와 기본 학습 콘텐츠를 함께 제공합니다.
          </p>
          <div className="tool-grid">
            {tools.map((t) => (
              <article key={t.key} className="tool-card">
                <div className="tool-media">
                  {t.image ? (
                    <img src={asset(t.image)} alt={`${t.name} 화면`} loading="lazy" />
                  ) : (
                    <div className="tool-visual">
                      <ToolIcon name={t.icon} />
                      <ul>
                        {t.topics?.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="tool-body">
                  <h3>
                    <Brand name={t.name} />
                  </h3>
                  <p className="tool-role">{t.role}</p>
                  <p>{t.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 대상 · 목표 · 기관 */}
      <section className="section">
        <div className="container hub-info">
          <div>
            <h3 className="sub-title">누구나 참여할 수 있어요</h3>
            <ul className="chips">
              {audiences.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <p className="muted small">연령과 배경에 관계없이 무료로 열려 있는 플랫폼입니다.</p>
          </div>
          <div>
            <h3 className="sub-title">핵심 목표</h3>
            <ul className="chips chips-outline">
              {goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="sub-title">함께하는 기관</h3>
            <ul className="partner-list">
              {partners.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="hub-cta">
        <div className="container">
          <h2>지금 MakePlayAI에서 나만의 AI를 만들어 보세요</h2>
          <p>
            {hubNotice.status}이며 {hubNotice.launch}입니다. 궁금한 점은 <a href={hubLinks.faq} target="_blank" rel="noreferrer">자주하는 질문</a>에서
            확인할 수 있습니다.
          </p>
          <ExternalLink href={makeplayUrl} className="btn btn-light">
            MakePlayAI 시작하기 ↗
          </ExternalLink>
        </div>
      </section>
    </>
  )
}
