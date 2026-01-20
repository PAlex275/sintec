import { useState } from 'react'
import Hero from '../components/Hero'
import { Section, SectionHeader } from '../components/Section'
import { Button } from '../components/Button'
import { Card, CardTitle, CardText, CardGrid } from '../components/Card'
import {
  LocationIcon,
  PhoneIcon,
  EmailIcon,
  ClockIcon,
  SendIcon,
  ExternalLinkIcon
} from '../components/Icons'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Mulțumim pentru mesaj! Te vom contacta în curând.')
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <>
      <Hero
        small
        badge="Contactează-ne"
        title="Suntem aici să"
        titleHighlight="ajutăm"
        description="Ai întrebări despre produsele sau serviciile noastre? Vrei o ofertă personalizată? Contactează-ne și îți răspundem prompt."
      />

      {/* Contact Section */}
      <Section variant="white">
        <div className="split" style={{ gap: 'var(--space-4xl)' }}>
          {/* Contact Form */}
          <div>
            <h2 style={{ marginBottom: 'var(--space-xl)' }}>Trimite-ne un mesaj</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__row">
                <div className="form__group">
                  <label className="form__label" htmlFor="name">Nume complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form__input"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="company">Companie / Instituție</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form__input"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form__row">
                <div className="form__group">
                  <label className="form__label" htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form__input"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form__input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="subject">Subiect *</label>
                <select
                  id="subject"
                  name="subject"
                  className="form__select"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Selectează subiectul</option>
                  <option value="erp">ERP Sintec - Informații / Ofertă</option>
                  <option value="diasan">DIASAN - Informații / Ofertă</option>
                  <option value="custom">Aplicații personalizate</option>
                  <option value="hardware">Hardware și echipamente</option>
                  <option value="support">Suport tehnic</option>
                  <option value="other">Altele</option>
                </select>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="message">Mesaj *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form__textarea"
                  rows="6"
                  required
                  placeholder="Descrie pe scurt nevoile sau întrebările tale..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg">
                Trimite mesajul
                <SendIcon />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 style={{ marginBottom: 'var(--space-xl)' }}>Date de contact</h2>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-item__icon">
                  <LocationIcon />
                </div>
                <div className="contact-item__content">
                  <h4>Adresă</h4>
                  <p>
                    Str. Someșului nr. 15<br />
                    550003 Sibiu, România
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon">
                  <PhoneIcon />
                </div>
                <div className="contact-item__content">
                  <h4>Telefon</h4>
                  <p>
                    <a href="tel:+40269210044">+40 269 210 044</a><br />
                    <a href="tel:+40269210045">+40 269 210 045</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon">
                  <EmailIcon />
                </div>
                <div className="contact-item__content">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:office@sintec.ro">office@sintec.ro</a><br />
                    <a href="mailto:suport@sintec.ro">suport@sintec.ro</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon">
                  <ClockIcon />
                </div>
                <div className="contact-item__content">
                  <h4>Program</h4>
                  <p>
                    Luni - Vineri: 08:00 - 17:00<br />
                    Sâmbătă - Duminică: Închis
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div style={{ marginTop: 'var(--space-3xl)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-lg)' }}>Contact rapid</h3>
              <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                <Card style={{ padding: 'var(--space-lg)' }}>
                  <CardTitle style={{ fontSize: '1rem', marginBottom: 'var(--space-xs)' }}>Suport tehnic</CardTitle>
                  <CardText style={{ marginBottom: 'var(--space-sm)', fontSize: '0.9rem' }}>
                    Pentru clienții cu contract de suport activ
                  </CardText>
                  <a href="tel:+40269210046" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                    +40 269 210 046
                  </a>
                </Card>
                <Card style={{ padding: 'var(--space-lg)' }}>
                  <CardTitle style={{ fontSize: '1rem', marginBottom: 'var(--space-xs)' }}>Vânzări</CardTitle>
                  <CardText style={{ marginBottom: 'var(--space-sm)', fontSize: '0.9rem' }}>
                    Pentru oferte și informații comerciale
                  </CardText>
                  <a href="mailto:vanzari@sintec.ro" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                    vanzari@sintec.ro
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <section style={{ width: '100%', height: '450px' }}>
        <iframe
          src="https://www.google.com/maps?q=Strada+Somesului+15,+Sibiu,+Romania&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Locația SINTEC pe hartă"
        />
      </section>

      {/* FAQ */}
      <Section variant="white">
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <SectionHeader
            badge="Întrebări frecvente"
            title="Ai întrebări?"
          />

          <CardGrid style={{ gridTemplateColumns: '1fr' }}>
            <Card>
              <CardTitle style={{ fontSize: '1.1rem' }}>Cât durează implementarea unui sistem ERP?</CardTitle>
              <CardText style={{ marginBottom: 0 }}>
                Durata implementării depinde de complexitatea organizației și numărul
                de module necesare. În general, o implementare completă poate dura
                între 2-6 luni, incluzând configurarea, migrarea datelor și instruirea.
              </CardText>
            </Card>

            <Card>
              <CardTitle style={{ fontSize: '1.1rem' }}>Oferiți demonstrații ale produselor?</CardTitle>
              <CardText style={{ marginBottom: 0 }}>
                Da, organizăm demonstrații gratuite ale tuturor produselor noastre.
                Contactează-ne pentru a programa o sesiune online sau la sediul tău.
              </CardText>
            </Card>

            <Card>
              <CardTitle style={{ fontSize: '1.1rem' }}>Ce include contractul de suport?</CardTitle>
              <CardText style={{ marginBottom: 0 }}>
                Contractele de suport includ actualizări software, asistență telefonică
                și prin email, intervenții remote și, în funcție de pachet, vizite la
                sediu. Detaliile variază în funcție de nivelul de suport ales.
              </CardText>
            </Card>

            <Card>
              <CardTitle style={{ fontSize: '1.1rem' }}>Lucrați doar în zona Sibiu?</CardTitle>
              <CardText style={{ marginBottom: 0 }}>
                Nu, avem clienți în toată România. Oferim suport remote pentru toate
                locațiile și putem efectua implementări și intervenții la sediu oriunde
                în țară.
              </CardText>
            </Card>
          </CardGrid>
        </div>
      </Section>
    </>
  )
}

export default Contact
