import './OmOs.scss'
import Foto1 from '../../Billeder/Fotos/13255943_958660250918610_4280467747354417614_n.jpg'
import Foto2 from '../../Billeder/Fotos/13226644_958660240918611_3434291679470295660_n.jpg'
import Foto3 from '../../Billeder/Fotos/420605_371193742998600_251405456_n.jpg'
import Foto4 from '../../Billeder/Fotos/57325198_2075682595883031_8842221344629194752_n.jpg'
import Foto5 from '../../Billeder/Fotos/935231_371193959665245_700749190_n.jpg'
import Foto6 from '../../Billeder/Fotos/936700_371193732998601_1760819839_n.jpg'

const galleryImages = [
  {
    src: Foto1,
    alt: 'Børn og voksne i fællesskab på lejren',
    className: 'gallery-card--featured',
  },
  {
    src: Foto2,
    alt: 'Udeliv og aktiviteter i grønne omgivelser',
    className: 'gallery-card--tall',
  },
  {
    src: Foto3,
    alt: 'Et øjeblik fra et lejrprogram med nærvær og samvær',
    className: 'gallery-card--wide',
  },
  {
    src: Foto4,
    alt: 'Deltagere samlet ved lejren i sommerlige omgivelser',
  },
  {
    src: Foto5,
    alt: 'Lejrliv med plads til leg og pauser',
  },
  {
    src: Foto6,
    alt: 'En dag på lejren med natur og fællesskab',
  },
]

function OmOsPage() {
  return (
    <div className="om-os-page">
      <section className="page-hero">
        <div className="page-hero__media">
          <div className="page-hero__overlay" />
          <div className="container page-hero__content">
            <h1>Om os</h1>
          </div>
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

      <section className="section section--soft">
        <div className="container gallery-section">
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <figure className={`gallery-card ${image.className ?? ''}`.trim()} key={image.alt}>
                <img className="gallery-card__image" src={image.src} alt={image.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OmOsPage
