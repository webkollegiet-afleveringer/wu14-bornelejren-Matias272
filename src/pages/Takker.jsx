import './Takker.scss'

const sponsors = ['Virksomhed A', 'Virksomhed B', 'Virksomhed C', 'Virksomhed D', 'Virksomhed E', 'Virksomhed F']

function TakkerPage() {
  return (
    <div className="takker-page">
      <section className="section">
        <div className="container thanks-intro">
          <p className="eyebrow">Tak</p>
          <h1>Børnelejren takker</h1>
          <p>
            Børnelejren på Langeland takker alle, der på den ene eller anden måde har støttet
            foreningens arbejde. Uden jeres hjælp ville det ikke være muligt at skabe de
            lejrophold, der giver børnene gode minder og et pusterum fra hverdagen.
          </p>
          <h2>En særlig tak til:</h2>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container sponsor-cards">
          {sponsors.map((sponsorName) => (
            <article className="sponsor-card" key={sponsorName}>
              <div className="sponsor-card__mark" aria-hidden="true" />
              <div>
                <h3>{sponsorName}</h3>
                <p>Plads til logo og yderligere oplysninger.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default TakkerPage
