import { useEffect, type TransitionEvent } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { prefersReducedMotion, usePageTransition } from './pageTransition'
import { useLang } from '../i18n/lang'
import { ui } from '../i18n/ui'

/**
 * 페이지 전환: 원본 Wix 사이트 설정(OutIn, 700ms)과 같이
 * 이전 페이지가 먼저 사라지고(0.35s) 새 페이지가 나타난다(0.35s). 헤더·푸터는 그대로 둔다.
 */
export default function Layout() {
  const { pathname } = useLocation()
  const { leaving, entering, onLeft } = usePageTransition()
  const { t } = useLang()

  // 모션 줄이기 설정이면 전환 없이 바로 바뀌므로 여기서 맨 위로 올린다
  useEffect(() => {
    if (prefersReducedMotion()) window.scrollTo(0, 0)
  }, [pathname])

  // transitionend를 놓치는 경우(백그라운드 탭 등)에도 넘어가도록 대비
  useEffect(() => {
    if (!leaving) return
    const id = window.setTimeout(onLeft, 600)
    return () => window.clearTimeout(id)
  }, [leaving, onLeft])

  function handleTransitionEnd(e: TransitionEvent<HTMLElement>) {
    if (e.target === e.currentTarget && leaving) onLeft()
  }

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        {t(ui.skipToMain)}
      </a>
      <Header />
      <main
        id="main"
        key={pathname}
        className={`page-transition${leaving ? ' is-leaving' : entering ? ' is-entering' : ''}`}
        onTransitionEnd={handleTransitionEnd}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
