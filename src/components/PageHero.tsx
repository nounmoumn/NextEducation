import type { ReactNode } from 'react'
import AccentBar from './AccentBar'

type Props = {
  title: ReactNode
  subtitle?: ReactNode
  /** 'tall'은 홈 화면용 큰 배너 */
  size?: 'tall' | 'normal'
  variant?: 'navy' | 'teal' | 'slate'
}

/**
 * 페이지 상단 배너. Wix 원본의 기본 제공 영상/스톡 이미지 대신 그라디언트 배경을 사용한다.
 */
export default function PageHero({ title, subtitle, size = 'normal', variant = 'navy' }: Props) {
  return (
    <section className={`page-hero hero-${size} hero-${variant}`}>
      <div className="container">
        {size === 'tall' && <AccentBar light />}
        <h1>{title}</h1>
        {subtitle && <p className="hero-sub">{subtitle}</p>}
      </div>
    </section>
  )
}
