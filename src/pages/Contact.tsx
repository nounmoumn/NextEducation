import { useState, type FormEvent } from 'react'
import PageHero from '../components/PageHero'
import AccentBar from '../components/AccentBar'
import { site } from '../data/site'
import { contactText as c } from '../data/contact'
import { useLang } from '../i18n/lang'

/**
 * 백엔드가 없으므로 문의 폼은 사용자의 메일 앱을 열어(mailto) 보내도록 한다.
 * 추후 Formspree 등 외부 폼 서비스나 서버리스 함수로 교체할 수 있다.
 */
export default function Contact() {
  const { lang, t } = useLang()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' })

  function update(key: keyof typeof form) {
    return (e: { target: { value: string } }) => setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  function submit(e: FormEvent) {
    e.preventDefault()
    const name = lang === 'en' ? `${form.firstName} ${form.lastName}` : `${form.lastName}${form.firstName}`
    const subject = `${t(c.mailSubject)} ${name}`
    const body = `${t(c.mailName)}: ${name}\n${t(c.mailEmail)}: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const mapQuery = encodeURIComponent('서울특별시 성북구 북악산로31길 22')

  return (
    <>
      <PageHero title={t(c.hero)} variant="slate" />

      <section className="section">
        <div className="container narrow">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-lead">{t(c.lead)}</p>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <input
                required
                placeholder={`${t(c.firstName)} *`}
                value={form.firstName}
                onChange={update('firstName')}
                aria-label={t(c.firstName)}
              />
              <input
                required
                placeholder={`${t(c.lastName)} *`}
                value={form.lastName}
                onChange={update('lastName')}
                aria-label={t(c.lastName)}
              />
            </div>
            <input
              required
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={update('email')}
              aria-label="Email"
            />
            <textarea
              required
              rows={5}
              placeholder={`${t(c.message)} *`}
              value={form.message}
              onChange={update('message')}
              aria-label={t(c.message)}
            />
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                {t(c.submit)}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AccentBar center />
          <h2 className="section-title center">{t(c.directions)}</h2>
          <p className="center muted">{t(site.address)}</p>
          <div className="map-frame">
            <iframe
              title={t(c.mapTitle)}
              src={`https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container narrow center">
          <h2 className="section-title center">{t(c.donations)}</h2>
          <p className="donation-lead">{t(c.donationLead)}</p>
          <p className="muted">{t(c.none)}</p>
        </div>
      </section>
    </>
  )
}
