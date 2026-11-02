import PageHero from '../components/PageHero'
import AccentBar from '../components/AccentBar'
import { asset } from '../data/site'
import { researchDomains } from '../data/research'
import { useLang } from '../i18n/lang'

export default function Research() {
  const { t } = useLang()
  return (
    <>
      <PageHero title="Our Research Domain" variant="teal" />
      <section className="section">
        <div className="container">
          <AccentBar center />
          <div className="research-grid">
            {researchDomains.map((d) => (
              <article key={d.title.ko} className="research-item">
                <img src={asset(d.icon)} alt="" />
                <h3>{t(d.title)}</h3>
                <p>{t(d.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
