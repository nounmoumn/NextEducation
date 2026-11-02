import { useEffect, useRef, useState } from 'react'

/** 요소가 화면에 처음 들어오면 true (한 번만). 등장 애니메이션 시작 신호로 쓴다. */
export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null)
  // IntersectionObserver가 없는 환경에서는 바로 보이게 한다
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, inView])

  return [ref, inView] as const
}
