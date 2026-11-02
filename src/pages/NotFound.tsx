import { Link } from 'react-router-dom'
import { useLang } from '../i18n/lang'
import { ui } from '../i18n/ui'

export default function NotFound() {
  const { t } = useLang()
  return (
    <section className="section">
      <div className="container narrow center">
        <h1 className="section-title center">{t(ui.notFoundTitle)}</h1>
        <p className="muted">{t(ui.notFoundText)}</p>
        <Link to="/" className="btn btn-primary">
          {t(ui.goHome)}
        </Link>
      </div>
    </section>
  )
}
