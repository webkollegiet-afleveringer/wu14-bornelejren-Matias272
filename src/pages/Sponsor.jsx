import './Sponsor.scss'

function SponsorPage() {
  return (
    <section className="page-section sponsor-page container">
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

export default SponsorPage
