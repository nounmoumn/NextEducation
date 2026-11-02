import PageHero from '../components/PageHero'
import AccentBar from '../components/AccentBar'
import PhotoSlider from '../components/PhotoSlider'
import { directorPhotos, greeting, history } from '../data/about'
import { useLang } from '../i18n/lang'

export default function About() {
  const { t } = useLang()
  const [hello, intro] = t(greeting.hello)

  return (
    <>
      <PageHero title="Head Researcher's Welcome" variant="slate" />

      <section className="greeting">
        <PhotoSlider className="greeting-photo" photos={directorPhotos} />
        <div className="greeting-text">
          <p className="greeting-role">{t(greeting.role)}</p>
          <h2>{t(greeting.name)}</h2>
          <p>
            {hello}
            <br />
            {intro}
          </p>
          {greeting.paragraphs.map((p) => (
            <p key={p.ko}>{t(p)}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <AccentBar />
          <h2 className="section-title">History</h2>
          <ul className="history">
            {history.map((h) => (
              <li key={`${h.date}-${h.text.ko}`}>
                <span className="history-date">{h.date}</span>
                <span>{t(h.text)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
