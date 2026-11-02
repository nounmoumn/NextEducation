import { useState, type ReactNode } from 'react'
import PageHero from '../components/PageHero'
import './Hub.css'
import AccentBar from '../components/AccentBar'
import ShowcaseCarousel from '../components/ShowcaseCarousel'
import { asset } from '../data/site'
import {
  audiences,
  experiences,
  goals,
  hubLinks,
  hubNotice,
  makeplayUrl,
  methodSteps,
  partners,
  projectFlow,
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

function ExternalLink({ href, children, className = 'btn btn-primary' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  )
}

export default function Hub() {
  const [tool, setTool] = useState<'all' | 'MakePlayAI' | 'MakePlaySW'>('all')
  const visible = experiences.filter((e) => tool === 'all' || e.tool === tool)

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
              <article key={t.key} className={`tool-card tool-${t.key}`}>
                {t.image && (
                  <div className="tool-shot">
                    <img src={asset(t.image)} alt={`${t.name} 화면`} loading="lazy" />
                  </div>
                )}
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

      {/* 학습 방법 */}
      <section className="section section-dark">
        <div className="container">
          <AccentBar light />
          <h2 className="section-title">어떻게 배우나요?</h2>
          <p className="section-lead">
            AI가 답을 내는 시대에 사람에게 필요한 것은 문제 해결 과정을 설계하고 관리하는 메타인지입니다.
          </p>
          <div className="method-grid">
            {methodSteps.map((m) => (
              <article key={m.no} className="method-card">
                <span className="method-no">{m.no}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </article>
            ))}
          </div>

          <h3 className="sub-title light">상호작용 중심의 프로젝트 기반 학습</h3>
          <ol className="flow">
            {projectFlow.map((f) => (
              <li key={f.title}>
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </li>
            ))}
          </ol>
          <div className="text-center-link">
            <ExternalLink href={hubLinks.methods} className="more-link light">
              AI 학습 방법 자세히 보기 ↗
            </ExternalLink>
          </div>
        </div>
      </section>

      {/* 체험 프로그램 */}
      <section className="section section-muted">
        <div className="container">
          <AccentBar center />
          <h2 className="section-title center">체험해 보기</h2>
          <p className="section-lead center">원하는 체험을 골라 단계별 안내를 따라 AI 모델과 서비스를 직접 만들어 보세요.</p>
          <div className="news-tabs hub-tabs" role="tablist">
            {(['all', 'MakePlayAI', 'MakePlaySW'] as const).map((t) => (
              <button key={t} role="tab" aria-selected={tool === t} onClick={() => setTool(t)}>
                {t === 'all' ? '전체' : t}
              </button>
            ))}
          </div>
          <div className="exp-grid">
            {visible.map((e) => (
              <article key={e.title} className="exp-card">
                <div className="exp-head">
                  <span className={`exp-tool ${e.tool === 'MakePlayAI' ? 'is-ai' : 'is-sw'}`}>{e.tool}</span>
                  <span className="exp-type">{e.type}</span>
                </div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
                {e.steps && (
                  <ol className="exp-steps">
                    {e.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                )}
              </article>
            ))}
          </div>
          <div className="btn-row center">
            <ExternalLink href={hubLinks.tryAI}>MakePlayAI 체험하기 ↗</ExternalLink>
            <ExternalLink href={hubLinks.trySW} className="btn btn-outline">
              MakePlaySW 체험하기 ↗
            </ExternalLink>
            <ExternalLink href={hubLinks.knowledge} className="btn btn-outline">
              AI·수학 지식 학습 ↗
            </ExternalLink>
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
