import { useEffect, useState } from 'react'
import './Takker.scss'

const SPONSORS_STORAGE_KEY = 'bornelejrenSponsors'

export default function TakkerPage() {
  const [sponsors, setSponsors] = useState([])

  useEffect(() => {
    const sponsorsRaw = localStorage.getItem(SPONSORS_STORAGE_KEY)
    const storedSponsors = sponsorsRaw ? JSON.parse(sponsorsRaw) : []

    if (Array.isArray(storedSponsors)) {
      setSponsors(storedSponsors)
    }
  }, [])

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
          {sponsors.length > 0 ? (
            sponsors.map((sponsor, index) => (
              <article className="sponsor-card" key={`${sponsor.companyName}-${index}`}>
                <div className="sponsor-card__mark" aria-hidden="true" />
                <div>
                  <h3>{sponsor.companyName}</h3>
                  <p>
                    {sponsor.supportType} - {Number(sponsor.amount).toLocaleString('da-DK')} kr.
                  </p>
                </div>
              </article>
            ))
          ) : (
            <article className="sponsor-card">
              <div className="sponsor-card__mark" aria-hidden="true" />
              <div>
                <h3>Ingen sponsorer registreret endnu</h3>
                <p>De nyeste sponsorregistreringer vil blive vist her.</p>
              </div>
            </article>
          )}
        </div>
      </section>
    </div>
  )
}

