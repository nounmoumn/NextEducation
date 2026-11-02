import { useState, type FormEvent } from 'react'
import PageHero from '../components/PageHero'
import AccentBar from '../components/AccentBar'
import { site } from '../data/site'

/**
 * 백엔드가 없으므로 문의 폼은 사용자의 메일 앱을 열어(mailto) 보내도록 한다.
 * 추후 Formspree 등 외부 폼 서비스나 서버리스 함수로 교체할 수 있다.
 */
export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' })

  function update(key: keyof typeof form) {
    return (e: { target: { value: string } }) => setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  function submit(e: FormEvent) {
    e.preventDefault()
    const name = `${form.lastName}${form.firstName}`
    const subject = `[홈페이지 문의] ${name}`
    const body = `이름: ${name}\n이메일: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const mapQuery = encodeURIComponent('서울특별시 성북구 북악산로31길 22')

  return (
    <>
      <PageHero title="CONTACT 및 기부금" variant="slate" />

      <section className="section">
        <div className="container narrow">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-lead">감사합니다. 미래교육연구소는 모든 목소리에 귀기울입니다.</p>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <input required placeholder="이름 *" value={form.firstName} onChange={update('firstName')} aria-label="이름" />
              <input required placeholder="성 *" value={form.lastName} onChange={update('lastName')} aria-label="성" />
            </div>
            <input
              required
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={update('email')}
              aria-label="Email"
            />
            <textarea required rows={5} placeholder="내용 *" value={form.message} onChange={update('message')} aria-label="내용" />
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                제출
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AccentBar center />
          <h2 className="section-title center">오시는 길</h2>
          <p className="center muted">{site.address}</p>
          <div className="map-frame">
            <iframe
              title="미래융합교육 연구소 위치"
              src={`https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container narrow center">
          <h2 className="section-title center">기부금 내역</h2>
          <p className="donation-lead">더 나은 미래 교육을 위해 미래융합교육 연구소에 지원해주세요.</p>
          <p className="muted">- 없음</p>
        </div>
      </section>
    </>
  )
}
