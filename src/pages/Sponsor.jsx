import { useState } from 'react'
import './Sponsor.scss'

const sponsorTiers = [
  {
    title: 'Børnesponsorat',
    price: 'Kr. 4.000,-',
    description: 'Dækker ét barns ophold og transport.',
  },
  {
    title: 'Lejrsponsorat',
    price: 'Kr. 2.000,-',
    description: 'Dækker drift og vedligehold af lejren.',
  },
  {
    title: 'Diplomsponsor',
    price: 'Fra kr. 1.000,-',
    description: 'Modtag trykt diplom som tak for støtten.',
  },
]

const initialFormState = {
  supportType: 'Børnesponsorat',
  companyName: '',
  email: '',
  address: '',
  phone: '',
  amount: '',
}

function SponsorPage() {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }))
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }))
    setIsSubmitted(false)
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.supportType) {
      nextErrors.supportType = 'Vælg en støttetype.'
    }

    if (!formData.companyName.trim()) {
      nextErrors.companyName = 'Firmanavn er påkrævet.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email er påkrævet.'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = 'Indtast en gyldig email.'
    }

    if (!formData.address.trim()) {
      nextErrors.address = 'Adresse er påkrævet.'
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Telefon er påkrævet.'
    }

    const amount = Number(formData.amount)

    if (!formData.amount) {
      nextErrors.amount = 'Beløb er påkrævet.'
    } else if (Number.isNaN(amount) || amount < 1000) {
      nextErrors.amount = 'Beløbet skal være mindst 1000 kr.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setIsSubmitted(false)
      return
    }

    setErrors({})
    setIsSubmitted(true)
    setFormData(initialFormState)
  }

  return (
    <div className="sponsor-page">
      <section className="section">
        <div className="container sponsor-hero stack">
          <p className="eyebrow">Bliv sponsor</p>
          <h1>Tilmeld som sponsor</h1>
          <p>
            Jeres støtte gør en konkret forskel. Som sponsor er I med til at finansiere
            aktiviteter, udstyr og trygge oplevelser for børnene på lejren.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container tier-grid">
          {sponsorTiers.map((tier) => (
            <article className="tier-card" key={tier.title}>
              <h2>{tier.title}</h2>
              <p className="tier-card__price">{tier.price}</p>
              <p>{tier.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form className="sponsor-form" onSubmit={handleSubmit} noValidate>
            <div className="section__header">
              <p className="eyebrow">Registrering</p>
              <h2>Udfyld formularen</h2>
            </div>

            {isSubmitted ? (
              <p className="form-success" aria-live="polite">
                Tak for din tilmelding. Vi har modtaget din sponsoranmodning og vender
                tilbage hurtigst muligt.
              </p>
            ) : null}

            <div className="form-grid form-grid--two-column">
              <div className={`form-field ${errors.supportType ? 'form-field--invalid' : ''}`}>
                <label htmlFor="supportType">Støttetype</label>
                <select
                  id="supportType"
                  name="supportType"
                  value={formData.supportType}
                  onChange={handleChange}
                >
                  <option value="Børnesponsorat">Børnesponsorat</option>
                  <option value="Lejrsponsorat">Lejrsponsorat</option>
                  <option value="Diplomsponsor">Diplomsponsor</option>
                </select>
                {errors.supportType ? <small className="form-error">{errors.supportType}</small> : null}
              </div>

              <div className={`form-field ${errors.companyName ? 'form-field--invalid' : ''}`}>
                <label htmlFor="companyName">Firmanavn</label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                {errors.companyName ? <small className="form-error">{errors.companyName}</small> : null}
              </div>

              <div className={`form-field ${errors.email ? 'form-field--invalid' : ''}`}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email ? <small className="form-error">{errors.email}</small> : null}
              </div>

              <div className={`form-field ${errors.phone ? 'form-field--invalid' : ''}`}>
                <label htmlFor="phone">Telefon</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone ? <small className="form-error">{errors.phone}</small> : null}
              </div>

              <div className={`form-field ${errors.address ? 'form-field--invalid' : ''}`}>
                <label htmlFor="address">Adresse</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address ? <small className="form-error">{errors.address}</small> : null}
              </div>

              <div className={`form-field ${errors.amount ? 'form-field--invalid' : ''}`}>
                <label htmlFor="amount">Beløb i DKK</label>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  min="1000"
                  step="100"
                  value={formData.amount}
                  onChange={handleChange}
                />
                {errors.amount ? <small className="form-error">{errors.amount}</small> : null}
              </div>
            </div>

            <div className="sponsor-form__actions">
              <button type="submit" className="btn-primary">
                Tilmeld som sponsor
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default SponsorPage
