/** 원본 Wix 홈 Welcome 영역의 장식 도형 (경로는 원본 SVG 그대로) */

type ShapeProps = { className?: string }

/** 도넛 모양 링 */
export function RingShape({ className }: ShapeProps) {
  return (
    <svg className={className} viewBox="20 20 160 160" aria-hidden="true">
      <path d="M100 20c-44.181 0-80 35.819-80 80s35.819 80 80 80 80-35.819 80-80-35.819-80-80-80zm0 120.48c-22.351 0-40.48-18.128-40.48-40.48 0-22.351 18.128-40.479 40.48-40.479 22.351 0 40.479 18.128 40.479 40.479S122.351 140.48 100 140.48z" />
    </svg>
  )
}

/** 계단형 블록 2개를 겹친 도형 */
export function StepShape({ className }: ShapeProps) {
  const step = 'M123.5 123.5v-47h-47v-47h-47v95.092h45.857V170.5H170.5v-47h-47z'
  return (
    <svg className={className} viewBox="0 0 32 36" aria-hidden="true">
      <svg x="0" y="11" width="20" height="25" viewBox="29.5 29.5 141 141" preserveAspectRatio="none">
        <path d={step} />
      </svg>
      <svg x="12" y="0" width="20" height="25" viewBox="29.5 29.5 141 141" preserveAspectRatio="none">
        <path d={step} />
      </svg>
    </svg>
  )
}

/** 둥근 사각형 외곽선 */
export function RoundSquareShape({ className }: ShapeProps) {
  return (
    <svg className={className} viewBox="-3 -3 66 66" aria-hidden="true">
      <path
        d="M46.5 58.5h-33c-6.6 0-12-5.4-12-12v-33c0-6.6 5.4-12 12-12h33c6.6 0 12 5.4 12 12v33c0 6.6-5.4 12-12 12z"
        fill="none"
        stroke="currentColor"
        strokeWidth="9"
      />
    </svg>
  )
}
