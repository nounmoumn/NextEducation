import { createContext, useContext } from 'react'

export type PageTransitionState = {
  /** 이전 페이지가 사라지는 중 */
  leaving: boolean
  /** 한 번 이상 페이지를 옮긴 뒤 (첫 진입에는 나타나기 효과를 주지 않음) */
  entering: boolean
  /** 사라지기가 끝났을 때 호출 → 새 페이지로 바꾼다 */
  onLeft: () => void
}

export const PageTransitionContext = createContext<PageTransitionState>({
  leaving: false,
  entering: false,
  onLeft: () => {},
})

export const usePageTransition = () => useContext(PageTransitionContext)

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
