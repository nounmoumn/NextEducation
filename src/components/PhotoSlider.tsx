import { useEffect, useRef, useState } from 'react'
import { asset } from '../data/site'
import { useLang, type L } from '../i18n/lang'
import { ui } from '../i18n/ui'

type Photo = { src: string; alt: L }

type Props = {
  photos: Photo[]
  /** 자동 넘김 간격(ms). 0이면 자동 넘김 없음 */
  interval?: number
  className?: string
}

/** 원본 Wix 슬라이드쇼처럼 좌우 화살표 + 하단 점으로 넘기는 사진 슬라이더 */
export default function PhotoSlider({ photos, interval = 5000, className = '' }: Props) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)
  const { t } = useLang()
  const count = photos.length

  const wrap = (n: number) => ((n % count) + count) % count
  const go = (next: number) => setIndex(wrap(next))
  const step = (delta: number) => setIndex((i) => wrap(i + delta))

  useEffect(() => {
    if (!interval || paused || count < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % count), interval)
    return () => window.clearTimeout(id)
  }, [index, interval, paused, count])

  return (
    <div
      className={`photo-slider ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={t(ui.photoSlideshow)}
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') step(-1)
        if (e.key === 'ArrowRight') step(1)
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1)
        touchX.current = null
      }}
    >
      {photos.map((p, i) => (
        <img
          key={p.src}
          src={asset(p.src)}
          alt={t(p.alt)}
          className={i === index ? 'active' : undefined}
          aria-hidden={i !== index}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}

      {count > 1 && (
        <>
          <button className="slider-arrow prev" aria-label={t(ui.prevPhoto)} onClick={() => step(-1)}>
            <svg viewBox="0 0 21 41" aria-hidden="true">
              <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z" />
            </svg>
          </button>
          <button className="slider-arrow next" aria-label={t(ui.nextPhoto)} onClick={() => step(1)}>
            <svg viewBox="0 0 21 41" aria-hidden="true">
              <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z" />
            </svg>
          </button>
          <div className="slider-dots">
            {photos.map((p, i) => (
              <button
                key={p.src}
                aria-label={t(ui.nthPhoto)(i + 1)}
                aria-current={i === index}
                className={i === index ? 'active' : undefined}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
