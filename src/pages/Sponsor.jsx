import { useState } from 'react'
import { z } from 'zod'
import './Sponsor.scss'

const SPONSORS_STORAGE_KEY = 'bornelejrenSponsors'

const minimumAmountBySupportType = {
  Børnesponsorat: 4000,
  Lejrsponsorat: 2000,
  Diplomsponsor: 1000,
}

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

const sponsorSchema = z
  .object({
    supportType: z.enum(['Børnesponsorat', 'Lejrsponsorat', 'Diplomsponsor']),
    companyName: z.string().trim().min(1, 'Firmanavn er påkrævet.'),
    email: z.string().trim().min(1, 'Email er påkrævet.').email('Indtast en gyldig email.'),
    address: z.string().trim().min(1, 'Adresse er påkrævet.'),
    phone: z.string().trim().min(1, 'Telefon er påkrævet.'),
    amount: z.coerce.number().min(1, 'Beløbet skal være udfyldt.'),
  })
  .superRefine(({ supportType, amount }, context) => {
    const minimumAmount = minimumAmountBySupportType[supportType]

    if (amount < minimumAmount) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['amount'],
        message: `Beløbet skal være mindst ${minimumAmount} kr. for ${supportType}.`,
      })
    }
  })

function SponsorPage() {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const minimumAmount = minimumAmountBySupportType[formData.supportType]

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

  const saveSponsorToLocalStorage = (sponsorData) => {
    const currentSponsorsRaw = localStorage.getItem(SPONSORS_STORAGE_KEY)
    const currentSponsors = currentSponsorsRaw ? JSON.parse(currentSponsorsRaw) : []

    const nextSponsors = [
      ...currentSponsors,
      {
        companyName: sponsorData.companyName,
        supportType: sponsorData.supportType,
        amount: sponsorData.amount,
      },
    ]

    localStorage.setItem(SPONSORS_STORAGE_KEY, JSON.stringify(nextSponsors))
  }

  const validateForm = () => {
    const result = sponsorSchema.safeParse(formData)

    if (result.success) {
      return { errors: {}, parsedData: result.data }
    }

    const nextErrors = result.error.issues.reduce((collectedErrors, issue) => {
      const fieldName = issue.path[0]

      if (typeof fieldName === 'string' && !collectedErrors[fieldName]) {
        collectedErrors[fieldName] = issue.message
      }

      return collectedErrors
    }, {})

    return { errors: nextErrors, parsedData: null }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const { errors: nextErrors, parsedData } = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setIsSubmitted(false)
      return
    }

    saveSponsorToLocalStorage(parsedData)
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
                  min={minimumAmount}
                  step="100"
                  value={formData.amount}
                  onChange={handleChange}
                />
                <small>Minimum {minimumAmount} kr. for valgt støttetype.</small>
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
