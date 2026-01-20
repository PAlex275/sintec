import Hero from '../components/Hero'
import { Section, SectionHeader } from '../components/Section'
import { Button, ArrowIcon } from '../components/Button'
import { Card, CardIcon, CardTitle, CardText, CardGrid } from '../components/Card'
import { Stats, Stat } from '../components/Stats'
import CTA from '../components/CTA'
import {
  HeartIcon,
  LibraryIcon,
  BoltIcon,
  TruckIcon,
  BuildingIcon,
  BriefcaseIcon
} from '../components/Icons'

function Clienti() {
  return (
    <>
      <Hero
        small
        badge="Portofoliu"
        title="Clienții"
        titleHighlight="noștri"
        description="De peste 25 de ani, companii, spitale și instituții publice din România își desfășoară activitatea cu ajutorul soluțiilor SINTEC."
      />

      {/* Stats */}
      <Section variant="white">
        <Stats>
          <Stat number="500+" label="Clienți activi" />
          <Stat number="50+" label="Spitale" />
          <Stat number="100+" label="Instituții publice" />
          <Stat number="41" label="Județe acoperite" />
        </Stats>
      </Section>

      {/* Hospitals */}
      <Section>
        <SectionHeader
          badge="Sănătate"
          title="Spitale și clinici"
          description="DIASAN este utilizat în zeci de spitale din România pentru gestionarea activității medicale și raportarea către CNAS."
        />

        <div className="clients-grid">
          <div className="client-card">
            <span className="client-card__name">Spitalul Clinic Județean de Urgență Sibiu</span>
            <span className="client-card__type">Spital județean</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Spitalul Clinic Județean Brașov</span>
            <span className="client-card__type">Spital județean</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Spitalul Municipal Mediaș</span>
            <span className="client-card__type">Spital municipal</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Spitalul Orășenesc Cisnădie</span>
            <span className="client-card__type">Spital orășenesc</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Spitalul de Pneumoftiziologie Sibiu</span>
            <span className="client-card__type">Spital de specialitate</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Spitalul de Pediatrie Sibiu</span>
            <span className="client-card__type">Spital de specialitate</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Spitalul Municipal Făgăraș</span>
            <span className="client-card__type">Spital municipal</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Spitalul Orășenesc Avrig</span>
            <span className="client-card__type">Spital orășenesc</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Spitalul Municipal Sebeș</span>
            <span className="client-card__type">Spital municipal</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Spitalul de Psihiatrie Sibiu</span>
            <span className="client-card__type">Spital de specialitate</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Spitalul Municipal Aiud</span>
            <span className="client-card__type">Spital municipal</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Spitalul Orășenesc Agnita</span>
            <span className="client-card__type">Spital orășenesc</span>
          </div>
        </div>

        <p className="text-center mt-3" style={{ color: 'var(--color-gray-500)' }}>
          ...și multe alte unități medicale din întreaga țară
        </p>
      </Section>

      {/* Public Institutions */}
      <Section variant="white">
        <SectionHeader
          badge="Sector public"
          title="Instituții publice"
          description="ERP Sintec susține activitatea financiar-contabilă a numeroase primării, consilii și alte instituții publice."
        />

        <div className="clients-grid">
          <div className="client-card">
            <span className="client-card__name">Primăria Municipiului Sibiu</span>
            <span className="client-card__type">Primărie</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Consiliul Județean Sibiu</span>
            <span className="client-card__type">Consiliu județean</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Primăria Municipiului Mediaș</span>
            <span className="client-card__type">Primărie</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Consiliul Județean Alba</span>
            <span className="client-card__type">Consiliu județean</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Primăria Orașului Cisnădie</span>
            <span className="client-card__type">Primărie</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Primăria Orașului Avrig</span>
            <span className="client-card__type">Primărie</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Primăria Comunei Șelimbăr</span>
            <span className="client-card__type">Primărie</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Direcția de Asistență Socială Sibiu</span>
            <span className="client-card__type">Instituție subordonată</span>
          </div>
        </div>
      </Section>

      {/* Companies */}
      <Section>
        <SectionHeader
          badge="Business"
          title="Companii private"
          description="De la IMM-uri la companii mari, ERP Sintec și aplicațiile noastre personalizate susțin afaceri din diverse industrii."
        />

        <div className="clients-grid">
          <div className="client-card">
            <span className="client-card__name">SC Tursib SA</span>
            <span className="client-card__type">Transport public</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">SC Apă Canal SA Sibiu</span>
            <span className="client-card__type">Utilități</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">SC Termo SA Mediaș</span>
            <span className="client-card__type">Utilități</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">SC Piețe SA Sibiu</span>
            <span className="client-card__type">Administrare piețe</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">SC Salubritate SA</span>
            <span className="client-card__type">Salubritate</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">SC Grădina Zoo SA</span>
            <span className="client-card__type">Turism</span>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section variant="dark">
        <SectionHeader
          badge="Testimoniale"
          title="Ce spun clienții"
        />

        <CardGrid columns={2}>
          <div className="testimonial">
            <p className="testimonial__text">
              Colaborăm cu SINTEC de peste 15 ani. DIASAN ne-a permis să digitalizăm
              complet activitatea spitalului, de la internare până la raportarea CNAS.
              Suportul tehnic este excelent și răspund rapid la orice solicitare.
            </p>
            <div className="testimonial__author">
              <div className="testimonial__avatar">MN</div>
              <div className="testimonial__info">
                <strong>Dr. Maria Negru</strong>
                <span>Director medical, Spitalul Municipal</span>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <p className="testimonial__text">
              ERP Sintec ne-a simplificat enorm munca în departamentul financiar-contabil.
              Integrarea cu trezoreria și generarea automată a declarațiilor ANAF
              ne economisește ore întregi de muncă în fiecare lună.
            </p>
            <div className="testimonial__author">
              <div className="testimonial__avatar">IP</div>
              <div className="testimonial__info">
                <strong>Ion Popescu</strong>
                <span>Director economic, Primărie</span>
              </div>
            </div>
          </div>
        </CardGrid>
      </Section>

      {/* Industries */}
      <Section variant="white">
        <SectionHeader
          badge="Industrii"
          title="Domenii de activitate"
        />

        <CardGrid columns={3}>
          <Card className="text-center">
            <CardIcon style={{ margin: '0 auto var(--space-md)' }}><HeartIcon /></CardIcon>
            <CardTitle>Sănătate</CardTitle>
            <CardText>Spitale, clinici, centre de diagnostic</CardText>
          </Card>

          <Card className="text-center">
            <CardIcon accent style={{ margin: '0 auto var(--space-md)' }}><LibraryIcon /></CardIcon>
            <CardTitle>Administrație publică</CardTitle>
            <CardText>Primării, consilii, instituții subordonate</CardText>
          </Card>

          <Card className="text-center">
            <CardIcon style={{ margin: '0 auto var(--space-md)' }}><BoltIcon /></CardIcon>
            <CardTitle>Utilități</CardTitle>
            <CardText>Apă, gaze, electricitate, termoficare</CardText>
          </Card>

          <Card className="text-center">
            <CardIcon accent style={{ margin: '0 auto var(--space-md)' }}><TruckIcon /></CardIcon>
            <CardTitle>Transport</CardTitle>
            <CardText>Transport public, logistică, flote auto</CardText>
          </Card>

          <Card className="text-center">
            <CardIcon style={{ margin: '0 auto var(--space-md)' }}><BuildingIcon /></CardIcon>
            <CardTitle>Construcții</CardTitle>
            <CardText>Firme de construcții și proiectare</CardText>
          </Card>

          <Card className="text-center">
            <CardIcon accent style={{ margin: '0 auto var(--space-md)' }}><BriefcaseIcon /></CardIcon>
            <CardTitle>Servicii și comerț</CardTitle>
            <CardText>Companii de servicii și retail</CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* CTA */}
      <Section>
        <CTA
          title="Vrei să fii următorul client mulțumit?"
          description="Contactează-ne pentru a discuta despre cum soluțiile noastre pot ajuta organizația ta."
          buttonText="Contactează-ne"
          buttonTo="/contact"
        />
      </Section>
    </>
  )
}

export default Clienti
