/** 원본 사이트 제목 위에 놓이는 3색 막대 */
export default function AccentBar({ light = false, center = false }: { light?: boolean; center?: boolean }) {
  return (
    <div className={`accent-bar${light ? ' light' : ''}${center ? ' center' : ''}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  )
}
