import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { asset, navItems, site } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label={`${site.name} 홈`} onClick={() => setOpen(false)}>
          <img src={asset('images/site/logo.png')} alt={site.name} />
        </Link>
        <button
          className="menu-toggle"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`main-nav${open ? ' open' : ''}`} aria-label="주 메뉴">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
