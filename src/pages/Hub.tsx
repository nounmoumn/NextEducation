import type { ReactNode } from 'react'
import PageHero from '../components/PageHero'
import './Hub.css'
import AccentBar from '../components/AccentBar'
import ShowcaseCarousel from '../components/ShowcaseCarousel'
import { asset } from '../data/site'
import { audiences, goals, hubLinks, hubNotice, hubText as h, makeplayUrl, partners, tools } from '../data/hub'
import { useLang } from '../i18n/lang'

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

/** 제품 화면이 없는 도구 카드(학습 콘텐츠)에 쓰는 책 아이콘 */
function BookIcon() {
  return (
    <svg className="tool-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4H9a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5h-6A1.5 1.5 0 0 1 2 16z" />
      <path d="M22 5.5A1.5 1.5 0 0 0 20.5 4H15a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5h6a1.5 1.5 0 0 0 1.5-1.5z" />
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
  const { lang, t } = useLang()
  const [line1, line2] = t(h.headline)

  return (
    <>
      <PageHero title={t(h.heroTitle)} subtitle={t(h.heroSubtitle)} variant="teal" />

      {/* 소개 */}
      <section className="section">
        <div className="container hub-intro">
          <div>
            <AccentBar />
            <img className="hub-logo" src={asset('images/makeplay/logo.png')} alt="MakePlayAI" />
            <h2 className="hub-headline">
              {line1}
              <br />
              {line2}
            </h2>
            {lang === 'ko' ? (
              <p className="hub-lead">
                미래교육허브는 <Brand name="MakePlayAI" />를 통해 누구나 무료로 AI를 배우는 공간입니다. 두 가지 핵심 도구{' '}
                <Brand name="MakePlayAI" />와 <Brand name="MakePlaySW" />로 AI를 이론이 아닌 실습으로 익히고, 직접 만든
                모델로 나만의 서비스를 완성합니다.
              </p>
            ) : (
              <p className="hub-lead">
                The Next Education Hub is where anyone can learn AI for free through <Brand name="MakePlayAI" />. With two
                core tools, <Brand name="MakePlayAI" /> and <Brand name="MakePlaySW" />, you learn AI through hands-on
                practice rather than theory and turn the models you build into your own services.
              </p>
            )}
            <p className="hub-notice">
              <strong>{t(hubNotice.status)}</strong> · {t(hubNotice.launch)}
            </p>
            <div className="btn-row">
              <ExternalLink href={makeplayUrl}>{t(h.goToMakePlay)}</ExternalLink>
              <ExternalLink href={hubLinks.service} className="btn btn-outline">
                {t(h.serviceOverview)}
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
          <h2 className="section-title center">{t(h.whatTitle)}</h2>
          <p className="section-lead center">{t(h.whatLead)}</p>
          <div className="tool-grid">
            {tools.map((tool) => (
              <article key={tool.key} className="tool-card">
                <div className="tool-media">
                  {tool.image ? (
                    <img src={asset(tool.image)} alt={`${t(tool.name)} ${t(h.screen)}`} loading="lazy" />
                  ) : (
                    <div className="tool-visual">
                      <BookIcon />
                      <ul>
                        {tool.topics && t(tool.topics).map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="tool-body">
                  <h3>
                    <Brand name={t(tool.name)} />
                  </h3>
                  <p className="tool-role">{t(tool.role)}</p>
                  <p>{t(tool.text)}</p>
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
            <h3 className="sub-title">{t(h.audienceTitle)}</h3>
            <ul className="chips">
              {audiences.map((a) => (
                <li key={a.ko}>{t(a)}</li>
              ))}
            </ul>
            <p className="muted small">{t(h.audienceNote)}</p>
          </div>
          <div>
            <h3 className="sub-title">{t(h.goalsTitle)}</h3>
            <ul className="chips chips-outline">
              {goals.map((g) => (
                <li key={g.ko}>{t(g)}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="sub-title">{t(h.partnersTitle)}</h3>
            <ul className="partner-list">
              {partners.map((p) => (
                <li key={p.ko}>{t(p)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="hub-cta">
        <div className="container">
          <h2>{t(h.ctaTitle)}</h2>
          {lang === 'ko' ? (
            <p>
              {t(hubNotice.status)}이며 {t(hubNotice.launch)}입니다. 궁금한 점은{' '}
              <a href={hubLinks.faq} target="_blank" rel="noreferrer">
                {t(h.faq)}
              </a>
              에서 확인할 수 있습니다.
            </p>
          ) : (
            <p>
              MakePlayAI is {t(hubNotice.status).toLowerCase()}, with an {t(hubNotice.launch)}. Find answers to common
              questions in the{' '}
              <a href={hubLinks.faq} target="_blank" rel="noreferrer">
                {t(h.faq)}
              </a>
              .
            </p>
          )}
          <ExternalLink href={makeplayUrl} className="btn btn-light">
            {t(h.start)}
          </ExternalLink>
        </div>
      </section>
    </>
  )
}
