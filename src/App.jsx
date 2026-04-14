import { createBrowserRouter, NavLink, Outlet, RouterProvider, Link, useLocation } from 'react-router-dom'
import campLogo from '../Billeder/Logo/logo.jfif'
import './styles/app.scss'

function RootLayout() {
  const location = useLocation()
  const isFrontPage = location.pathname === '/'

  return (
    <div className="site-shell">
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

      <main>
        <Outlet />
      </main>
    </div>
  )
}

function ForsidePage() {
  return (
    <section className="page-section page-section--hero container">
      <h1>Bornelejren pa Langeland</h1>
      <p>
        Vi skaber trygge rammer, faellesskab og oplevelser for born og unge gennem en
        professionel og varm lejrkultur.
      </p>
      <div className="button-row">
        <NavLink to="/tilmeld-som-sponsor" className="btn btn--primary">
          Bliv sponsor
        </NavLink>
        <NavLink to="/om-os" className="btn btn--secondary">
          Laes om os
        </NavLink>
      </div>
    </section>
  )
}

function OmOsPage() {
  return (
    <section className="page-section container">
      <h1>Om os</h1>
      <p>
        Bornelejren arbejder for at give born en meningsfuld ferie med natur, leg,
        relationer og voksne rollemodeller. Vi samarbejder med lokale kraefter for at
        sikre en hoej kvalitet og et inkluderende miljo.
      </p>
    </section>
  )
}

function SponsorPage() {
  return (
    <section className="page-section container">
      <h1>Tilmeld som sponsor</h1>
      <p>
        Jeres stoette goer en konkret forskel. Som sponsor er I med til at finansiere
        aktiviteter, udstyr og trygge oplevelser for alle deltagere pa lejren.
      </p>
      <a className="btn btn--primary" href="mailto:kontakt@bornelejren.dk">
        Kontakt os om sponsorat
      </a>
    </section>
  )
}

function TakkerPage() {
  return (
    <section className="page-section container">
      <h1>Bornelejren takker</h1>
      <p>
        Tak til vores frivillige, partnere og sponsorer. Jeres bidrag er grunden til,
        at vi kan skabe minder og muligheder for born pa Langeland.
      </p>
    </section>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <ForsidePage /> },
      { path: 'om-os', element: <OmOsPage /> },
      { path: 'tilmeld-som-sponsor', element: <SponsorPage /> },
      { path: 'bornelejren-takker', element: <TakkerPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
