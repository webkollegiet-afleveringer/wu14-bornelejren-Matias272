import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './SiteHeader.scss'
import Logo from "../../Billeder/Logo/logo.svg";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-logo-link" aria-label="Tilbage til forsiden">
          <img className="site-logo" src={Logo} alt="Børnelejren på Langeland logo" />
        </Link>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span className="site-header__toggle-line" />
          <span className="site-header__toggle-line" />
          <span className="site-header__toggle-line" />
          <span className="sr-only">{isMenuOpen ? 'Luk navigation' : 'Åbn navigation'}</span>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primær navigation"
          className={`site-nav ${isMenuOpen ? 'site-nav--open' : ''}`}
        >
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Forside
          </NavLink>
          <NavLink
            to="/om-os"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Om os
          </NavLink>
          <NavLink
            to="/tilmeld"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Bliv sponsor
          </NavLink>
          <NavLink
            to="/tak"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Tak
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
