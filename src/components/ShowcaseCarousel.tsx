import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { asset } from '../data/site'
import { showcaseSlides, type ShowcaseBrand } from '../data/hub'
import './ShowcaseCarousel.css'

/** 자동 넘김 간격 (MakePlayAI 홈과 동일) */
const AUTOPLAY_MS = 4400
/** 돋보기 지름 = 화면 이미지 높이 × 이 비율 */
const LOUPE_RATIO = 0.85

type LoupeFrame = {
  key: string
  src: string
  focusX: number
  focusY: number
  zoom: number
  left: number
  top: number
  width: number
  height: number
}

/**
 * MakePlayAI 홈 화면의 제품 화면 캐러셀.
 * 한 슬라이드에 화면 2장, 슬라이드가 멈추면 각 화면의 주요 부분을 확대하는 돋보기가 나타난다.
 * 드래그/스와이프, 좌우 화살표, 하단 점, AI/SW 전환 버튼, 자동 넘김(마우스를 올리면 멈춤)을 지원한다.
 */
export default function ShowcaseCarousel({ renderBrand }: { renderBrand: (brand: ShowcaseBrand) => ReactNode }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start' })
  const stageRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [loupeVisible, setLoupeVisible] = useState(false)
  const [frames, setFrames] = useState<LoupeFrame[]>([])

  // 현재 슬라이드 이미지들의 실제 위치를 재서 돋보기 좌표를 만든다
  const measure = useCallback(() => {
    if (!embla || !stageRef.current) return
    const stage = stageRef.current.getBoundingClientRect()
    const index = embla.selectedScrollSnap()
    const node = embla.slideNodes()[index]
    const slide = showcaseSlides[index]
    if (!node || !slide) return setFrames([])
    const next: LoupeFrame[] = []
    node.querySelectorAll<HTMLImageElement>('img[data-loupe-key]').forEach((img) => {
      const shot = slide.shots.find((s) => s.src === img.dataset.loupeKey)
      const r = img.getBoundingClientRect()
      if (!shot || r.width < 8 || r.height < 8) return
      next.push({
        key: shot.src,
        src: asset(shot.src),
        ...shot.loupe,
        left: r.left - stage.left,
        top: r.top - stage.top,
        width: r.width,
        height: r.height,
      })
    })
    setFrames(next)
  }, [embla])

  useEffect(() => {
    if (!embla) return
    const onSelect = () => {
      setSelected(embla.selectedScrollSnap())
      setLoupeVisible(false)
    }
    const onScroll = () => setLoupeVisible(false)
    const onSettle = () => {
      measure()
      requestAnimationFrame(() => setLoupeVisible(true))
    }
    onSelect()
    onSettle()
    embla.on('select', onSelect).on('scroll', onScroll).on('settle', onSettle)
    return () => {
      embla.off('select', onSelect).off('scroll', onScroll).off('settle', onSettle)
    }
  }, [embla, measure])

  useEffect(() => {
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  useEffect(() => {
    if (!embla || hovered) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      if (document.visibilityState !== 'hidden') embla.scrollNext()
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [embla, hovered])

  const currentBrand = showcaseSlides[selected]?.brand ?? 'AI'
  const jumpTo = (brand: ShowcaseBrand) => {
    const i = showcaseSlides.findIndex((s) => s.brand === brand)
    if (i >= 0) embla?.scrollTo(i)
  }

  return (
    <div className="showcase" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="showcase-glow" aria-hidden="true" />
      <div className="showcase-inner">
        <div className="showcase-toggle">
          {(['AI', 'SW'] as const).map((b) => (
            <button
              key={b}
              type="button"
              aria-pressed={currentBrand === b}
              aria-label={`MakePlay${b} 슬라이드로 이동`}
              className={currentBrand === b ? 'active' : undefined}
              onClick={() => jumpTo(b)}
            >
              {renderBrand(b)}
            </button>
          ))}
        </div>

        <div className="showcase-row">
          <button type="button" className="showcase-arrow" aria-label="이전 화면" onClick={() => embla?.scrollPrev()}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="showcase-stage" ref={stageRef}>
            <div className="showcase-viewport" ref={emblaRef}>
              <div className="showcase-track">
                {showcaseSlides.map((slide, i) => (
                  <div
                    key={slide.shots.map((s) => s.src).join('-')}
                    className="showcase-slide"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} / ${showcaseSlides.length}`}
                  >
                    {slide.shots.map((shot) => (
                      <div key={shot.src} className="showcase-shot">
                        <img
                          src={asset(shot.src)}
                          alt={`MakePlay${slide.brand} ${shot.alt}`}
                          data-loupe-key={shot.src}
                          draggable={false}
                          onLoad={measure}
                          loading={i < 2 ? 'eager' : 'lazy'}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {frames.map((f) => (
              <LoupeLens key={f.key} frame={f} visible={loupeVisible} />
            ))}
          </div>

          <button type="button" className="showcase-arrow" aria-label="다음 화면" onClick={() => embla?.scrollNext()}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="showcase-dots">
          <div>
            {showcaseSlides.map((slide, i) => (
              <button
                key={slide.shots.map((s) => s.src).join('-')}
                type="button"
                aria-label={`${i + 1}번째 슬라이드`}
                aria-current={selected === i}
                className={selected === i ? 'active' : undefined}
                onClick={() => embla?.scrollTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function LoupeLens({ frame, visible }: { frame: LoupeFrame; visible: boolean }) {
  const size = frame.height * LOUPE_RATIO
  const zw = frame.width * frame.zoom
  const zh = frame.height * frame.zoom
  return (
    <div
      aria-hidden="true"
      className={`showcase-loupe${visible ? ' visible' : ''}`}
      style={{
        width: size,
        height: size,
        left: frame.left + (frame.focusX / 100) * frame.width,
        top: frame.top + (frame.focusY / 100) * frame.height,
      }}
    >
      <img
        src={frame.src}
        alt=""
        style={{
          width: zw,
          height: zh,
          left: size / 2 - (frame.focusX / 100) * zw,
          top: size / 2 - (frame.focusY / 100) * zh,
        }}
      />
    </div>
  )
}
