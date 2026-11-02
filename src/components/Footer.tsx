import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <p className="footer-home">
            <a href={site.homepage} target="_blank" rel="noreferrer">
              hints.or.kr
            </a>
          </p>
          <p>{site.copyright}</p>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div className="footer-col">
          <h3>Address</h3>
          <p>{site.address}</p>
        </div>
      </div>
    </footer>
  )
}
