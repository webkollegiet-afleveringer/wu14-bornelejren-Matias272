import { Link, NavLink } from 'react-router-dom'
import Logo from "../../Billeder/Logo/logo.svg";
import './SiteFooter.scss'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Link to="/" className="site-footer__logo-link" aria-label="Tilbage til forsiden">
            <img className="site-footer__logo" src={Logo} alt="Børnelejren på Langeland logo" />
          </Link>
          <p>
            Vi skaber trygge lejrophold for børn, der fortjener ro, natur og fællesskab.
          </p>
        </div>

        <div className="site-footer__links" aria-label="Footer navigation">
          <h2 className="site-footer__title">Genveje</h2>
          <NavLink to="/">Forside</NavLink>
          <NavLink to="/om-os">Om os</NavLink>
          <NavLink to="/tilmeld">Bliv sponsor</NavLink>
          <NavLink to="/tak">Tak</NavLink>
        </div>

        <div className="site-footer__contact">
          <h2 className="site-footer__title">Kontakt</h2>
          <p>Knud Bro Alle 1, st. mf.</p>
          <p>3660 Stenløse</p>
          <p>38711260</p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>© 2026 Børnelejren på Langeland. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter