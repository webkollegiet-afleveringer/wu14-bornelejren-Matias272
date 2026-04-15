import './OmOs.scss'
import Hero from "../../Billeder/Fotos/hero.jpg";

function OmOsPage() {
  return (
    <div className="om-os-page">
      <section className="page-hero">
        <img
          className="page-hero__image"
          src={Hero}
          alt="Børnelejren på Langeland i naturrige omgivelser"
        />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <h1>Om os</h1>
        </div>
      </section>

      <section className="section">
        <div className="container about-section">
          <div className="about-section__text">
            <p>
              Børnelejren på Langeland er en forening, der sender børn på et gratis og
              værdigt lejrophold i naturskønne omgivelser. Målet er at give børn, der ellers
              kan have svært ved at komme hjemmefra, nogle gode dage med fællesskab, ro og
              voksne omkring sig.
            </p>
            <p>
              Foreningen drives af en frivillig bestyrelse og et stærkt netværk af støtter,
              som hjælper med at holde lejren i gang. Det gør det muligt at skabe et ophold,
              hvor børnene kan være børn, deltage i aktiviteter og få oplevelser, som ellers
              kan være uden for rækkevidde.
            </p>
            <p>
              Vi lægger vægt på ansvarlighed, enkelhed og nærvær. Derfor arbejder vi hele
              tiden på at bruge midlerne bedst muligt, så flest mulige børn får glæde af dem.
            </p>
          </div>

          <aside className="about-section__accent stack">
            <h2>Kontakt</h2>
            <div className="contact-block">
              <p>Knud Bro Alle 1, st. mf.</p>
              <p>3660 Stenløse</p>
              <p>38711260</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default OmOsPage
