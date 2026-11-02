import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { asset, navItems, site } from '../data/site'
import { LANGS, useLang } from '../i18n/lang'
import { ui } from '../i18n/ui'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label={`${t(site.name)} ${t(ui.home)}`} onClick={() => setOpen(false)}>
          <img src={asset('images/site/logo.png')} alt={t(site.name)} />
        </Link>
        <nav className={`main-nav${open ? ' open' : ''}`} aria-label={t(ui.mainMenu)}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {t(item.label)}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <div className="lang-toggle" role="group" aria-label={t(ui.language)}>
            {LANGS.map((l) => (
              <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)} lang={l}>
                {l === 'ko' ? 'KO' : 'EN'}
              </button>
            ))}
          </div>
          <button
            className="menu-toggle"
            aria-label={t(ui.openMenu)}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
