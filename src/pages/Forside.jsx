import { NavLink } from 'react-router-dom'
import './Forside.scss'

function ForsidePage() {
  return (
    <section className="page-section forside-page container">
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

export default ForsidePage
