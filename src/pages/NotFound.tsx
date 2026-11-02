import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow center">
        <h1 className="section-title center">페이지를 찾을 수 없습니다</h1>
        <p className="muted">주소가 바뀌었거나 삭제된 페이지입니다.</p>
        <Link to="/" className="btn btn-primary">
          홈으로
        </Link>
      </div>
    </section>
  )
}
