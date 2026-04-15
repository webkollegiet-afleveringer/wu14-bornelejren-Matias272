import { NavLink } from 'react-router-dom'
import './Forside.scss'
import Hero from "../../Billeder/Fotos/hero.jpg";


function ForsidePage() {
  return (
    <div className="forside-page">
      <section className="hero">
        <img
          className="hero__image"
          src={Hero}
          alt="Natur og grønt landskab ved lejren"
        />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <div className="stack">
            <p className="eyebrow">Børnelejren på Langeland</p>
            <h1>Hjælp os med at hjælpe dem</h1>
            <p>
              Børnelejren på Langeland sender dårligt stillede børn på et velfortjent
              lejrophold i naturskønne omgivelser.
            </p>
            <div>
              <NavLink to="/tilmeld" className="btn-primary">
                Bliv sponsor
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="home-intro section">
        <div className="container home-intro__content grid grid--two-column">
          <div className="home-intro__text">
            <div className="section__header">
              <p className="eyebrow">Velkommen</p>
              <h2>Et lejrophold med natur, nærvær og tryghed</h2>
            </div>
            <p>
              Velkommen til Børnelejren på Langeland. Vi arbejder for, at børn, som ellers
              sjældent får mulighed for ferie, kan komme væk hjemmefra og opleve nogle dage
              med ro, fællesskab og gode minder i et trygt miljø.
            </p>
            <p>
              Lejren drives af frivillige kræfter og er finansieret af virksomheder og
              støtter, der vil være med til at give børnene en oplevelse, de kan tage med sig
              hjem. Her er der plads til leg, gode samtaler, natur og voksne, der har tid.
            </p>
          </div>

          <aside className="home-intro__aside stat-card">
            <h3>Det kendetegner os</h3>
            <ul>
              <li>100% frivillig bestyrelse</li>
              <li>Gratis ophold for børnene</li>
              <li>Finansieret af erhvervslivet</li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default ForsidePage
