import { Link, NavLink, useLocation } from 'react-router-dom'
import campLogo from '../../Billeder/Logo/logo.jfif'
import './SiteHeader.scss'

function SiteHeader() {
  const location = useLocation()
  const isFrontPage = location.pathname === '/'

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {isFrontPage ? (
          <img className="site-logo site-logo--large" src={campLogo} alt="Bornelejren logo" />
        ) : (
          <Link to="/" className="site-logo-link" aria-label="Tilbage til forsiden">
            <img className="site-logo site-logo--small" src={campLogo} alt="Bornelejren logo" />
          </Link>
        )}

        <nav aria-label="Primar navigation" className="site-nav">
          <NavLink to="/" end>
            Forside
          </NavLink>
          <NavLink to="/om-os">Om os</NavLink>
          <NavLink to="/tilmeld-som-sponsor">Tilmeld som sponsor</NavLink>
          <NavLink to="/bornelejren-takker">Bornelejren takker</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
