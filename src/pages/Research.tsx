import PageHero from '../components/PageHero'
import AccentBar from '../components/AccentBar'
import { asset } from '../data/site'
import { researchDomains } from '../data/research'

export default function Research() {
  return (
    <>
      <PageHero title="Our Research Domain" variant="teal" />
      <section className="section">
        <div className="container">
          <AccentBar center />
          <div className="research-grid">
            {researchDomains.map((d) => (
              <article key={d.title} className="research-item">
                <img src={asset(d.icon)} alt="" />
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
