import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { Section, SectionHeader } from '../components/Section'
import { Button, ArrowIcon } from '../components/Button'
import { Card, CardIcon, CardTitle, CardText, CardGrid, ProductCard } from '../components/Card'
import { Stats, Stat } from '../components/Stats'
import CTA from '../components/CTA'
import {
  CalculatorIcon,
  BuildingIcon,
  CodeIcon,
  ShieldIcon,
  UsersIcon,
  RefreshIcon,
  SupportIcon,
  CheckIcon
} from '../components/Icons'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        badge="Peste 25 de ani de experiență"
        title="Soluții software"
        titleHighlight="integrate pentru afacerea ta"
        description="Dezvoltăm sisteme ERP, aplicații pentru spitale și soluții software personalizate care optimizează procesele și cresc eficiența organizației tale."
      >
        <Button to="/contact" variant="primary" size="lg">
          Cere ofertă
          <ArrowIcon />
        </Button>
        <Button to="/software" variant="secondary" size="lg">
          Descoperă produsele
        </Button>
      </Hero>

      {/* Stats Section */}
      <Section variant="white">
        <Stats>
          <Stat number="25+" label="Ani de experiență" />
          <Stat number="500+" label="Clienți activi" />
          <Stat number="50+" label="Spitale echipate" />
          <Stat number="100%" label="Suport dedicat" />
        </Stats>
      </Section>

      {/* Products Section */}
      <Section>
        <SectionHeader
          badge="Produse"
          title="Soluții software complete"
          description="De la gestiunea financiar-contabilă până la sisteme informatice pentru spitale, oferim soluții adaptate nevoilor specifice ale fiecărei organizații."
        />

        <CardGrid columns={3}>
          <ProductCard
            icon={<CalculatorIcon size={64} />}
            title="ERP Sintec"
            text="Sistem integrat pentru contabilitate, salarizare, gestiune și finanțe. Ideal pentru companii și instituții publice."
            to="/erp-sintec"
          />
          <ProductCard
            icon={<BuildingIcon size={64} />}
            title="DIASAN"
            text="Sistem informatic complet pentru spitale: internări, consultații, farmacii, laboratoare și raportări CNAS."
            to="/diasan"
            gradient="linear-gradient(135deg, #324376, #586BA4)"
          />
          <ProductCard
            icon={<CodeIcon size={64} />}
            title="Aplicații personalizate"
            text="Dezvoltăm aplicații software la comandă, adaptate perfect cerințelor și proceselor specifice ale afacerii tale."
            to="/aplicatii-personalizate"
            gradient="linear-gradient(135deg, #586BA4, #F5DD90)"
          />
        </CardGrid>
      </Section>

      {/* Services Overview */}
      <Section variant="white">
        <div className="split">
          <div className="split__content">
            <span className="section__badge">Servicii</span>
            <h2>Suport tehnic și consultanță IT</h2>
            <p>
              Pe lângă soluțiile software, oferim servicii complete de
              implementare, instruire, mentenanță și suport tehnic pentru toți
              clienții noștri.
            </p>
            <div className="features-list mt-2">
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Implementare completă</h4>
                  <p>Instalare, configurare și personalizare conform nevoilor tale.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Instruire personal</h4>
                  <p>Training pentru utilizatorii finali și administratorii de sistem.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Suport tehnic</h4>
                  <p>Asistență rapidă prin telefon, email sau intervenție la sediu.</p>
                </div>
              </div>
            </div>
            <Button to="/servicii" variant="primary" className="mt-2">
              Vezi toate serviciile
              <ArrowIcon />
            </Button>
          </div>
          <div className="split__image">
            <SupportIcon size={120} />
          </div>
        </div>
      </Section>

      {/* Why SINTEC */}
      <Section variant="dark">
        <SectionHeader
          badge="De ce SINTEC"
          title="Partenerul tău de încredere în IT"
          description="De peste 25 de ani, ajutăm companiile și instituțiile din România să-și digitalizeze și optimizeze procesele prin soluții software de calitate."
        />

        <CardGrid columns={3}>
          <Card>
            <CardIcon>
              <ShieldIcon />
            </CardIcon>
            <CardTitle>Experiență dovedită</CardTitle>
            <CardText>
              Peste două decenii de activitate în piața IT din România, cu sute
              de implementări de succes în diverse industrii.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent>
              <UsersIcon />
            </CardIcon>
            <CardTitle>Echipă dedicată</CardTitle>
            <CardText>
              Specialiști în dezvoltare software, implementare și suport tehnic,
              disponibili să răspundă rapid nevoilor clienților.
            </CardText>
          </Card>

          <Card>
            <CardIcon>
              <RefreshIcon />
            </CardIcon>
            <CardTitle>Actualizări continue</CardTitle>
            <CardText>
              Produsele noastre sunt actualizate permanent conform legislației
              în vigoare și cerințelor tehnice moderne.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* Clients Preview */}
      <Section>
        <SectionHeader
          badge="Clienți"
          title="Ne-au acordat încrederea"
          description="Companii, spitale și instituții publice din întreaga țară folosesc soluțiile noastre software."
        />

        <div className="clients-grid">
          <div className="client-card">
            <span className="client-card__name">Spitalul Județean Brașov</span>
            <span className="client-card__type">Spital</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Primăria Sibiu</span>
            <span className="client-card__type">Instituție publică</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Spitalul Municipal Mediaș</span>
            <span className="client-card__type">Spital</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">SC Transport SA</span>
            <span className="client-card__type">Companie</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Consiliul Județean Alba</span>
            <span className="client-card__type">Instituție publică</span>
          </div>
          <div className="client-card">
            <span className="client-card__name">Spitalul Clinic Sibiu</span>
            <span className="client-card__type">Spital</span>
          </div>
        </div>

        <div className="text-center mt-3">
          <Button to="/clienti" variant="secondary">
            Vezi toți clienții
            <ArrowIcon />
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <CTA
          title="Pregătit să-ți optimizezi afacerea?"
          description="Contactează-ne pentru o consultație gratuită și descoperă cum soluțiile noastre pot răspunde nevoilor tale."
          buttonText="Contactează-ne acum"
          buttonTo="/contact"
        />
      </Section>
    </>
  )
}

export default Home
