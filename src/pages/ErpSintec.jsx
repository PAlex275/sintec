import Hero from '../components/Hero'
import { Section, SectionHeader } from '../components/Section'
import { Button, ArrowIcon } from '../components/Button'
import { Card, CardIcon, CardTitle, CardText, CardGrid } from '../components/Card'
import { Stats, Stat } from '../components/Stats'
import CTA from '../components/CTA'
import {
  CalculatorIcon,
  MoneyIcon,
  BoxIcon,
  BuildingIcon,
  ChartIcon,
  CheckIcon,
  BriefcaseIcon,
  LibraryIcon
} from '../components/Icons'

function ErpSintec() {
  return (
    <>
      <Hero
        small
        badge="Produs principal"
        title="ERP"
        titleHighlight="Sintec"
        description="Sistem integrat pentru gestiunea completă a afacerii tale: contabilitate, salarizare, gestiune stocuri, mijloace fixe și raportare financiară."
      >
        <Button to="/contact" variant="primary" size="lg">
          Cere demonstrație
        </Button>
        <a href="#module" className="btn btn--secondary btn--lg">
          Vezi modulele
        </a>
      </Hero>

      {/* Overview */}
      <Section variant="white">
        <div className="split">
          <div className="split__content">
            <span className="section__badge">Prezentare generală</span>
            <h2>O platformă, toate procesele</h2>
            <p>
              ERP Sintec este un sistem modular care integrează toate procesele
              financiar-contabile ale organizației într-o singură platformă.
              Modulele comunică între ele, eliminând introducerea dublă a datelor
              și reducând erorile umane.
            </p>
            <p>
              Sistemul este actualizat constant conform modificărilor legislative
              și cerințelor de raportare către ANAF, trezorerie și alte instituții.
            </p>
            <div className="features-list mt-2">
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Actualizări legislative gratuite</h4>
                  <p>Modificări conform legislației în vigoare.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Raportări standardizate</h4>
                  <p>Export către ANAF, trezorerie, bănci.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Multi-utilizator</h4>
                  <p>Acces simultan cu drepturi pe roluri.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="split__image">
            <CalculatorIcon size={120} />
          </div>
        </div>
      </Section>

      {/* Modules */}
      <Section id="module">
        <SectionHeader
          badge="Module"
          title="Componentele sistemului"
          description="Alege modulele de care ai nevoie. Fiecare modul funcționează independent, dar toate se integrează perfect între ele."
        />

        <CardGrid columns={3}>
          <Card>
            <CardIcon><CalculatorIcon /></CardIcon>
            <CardTitle>Contabilitate</CardTitle>
            <CardText>
              Contabilitate generală și de gestiune. Plan de conturi personalizabil,
              balanțe, bilanț, situații financiare, declarații ANAF.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><MoneyIcon /></CardIcon>
            <CardTitle>Salarizare</CardTitle>
            <CardText>
              Calcul salarii, contribuții, impozite. Adeverințe, fluturași,
              declarații D112, fișe fiscale, viramente salarii.
            </CardText>
          </Card>

          <Card>
            <CardIcon><BoxIcon /></CardIcon>
            <CardTitle>Gestiune stocuri</CardTitle>
            <CardText>
              Intrări, ieșiri, transferuri între gestiuni. Inventariere,
              NIR-uri, avize, facturi, balanțe de stoc pe fiecare gestiune.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><BuildingIcon /></CardIcon>
            <CardTitle>Mijloace fixe</CardTitle>
            <CardText>
              Evidența și amortizarea mijloacelor fixe. Fișe, reevaluări,
              casări, inventariere, rapoarte legale.
            </CardText>
          </Card>

          <Card>
            <CardIcon><MoneyIcon /></CardIcon>
            <CardTitle>Casierie și bancă</CardTitle>
            <CardText>
              Gestiune numerar și operațiuni bancare. Registru de casă,
              extrase bancare, reconcilieri, plăți furnizori.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><ChartIcon /></CardIcon>
            <CardTitle>Raportare</CardTitle>
            <CardText>
              Rapoarte personalizabile, export Excel, PDF. Dashboard-uri,
              indicatori de performanță, analize comparative.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* For whom */}
      <Section variant="dark">
        <SectionHeader
          badge="Pentru cine"
          title="Clienți tipici ERP Sintec"
        />

        <CardGrid>
          <Card>
            <CardIcon><BriefcaseIcon /></CardIcon>
            <CardTitle>Companii private</CardTitle>
            <CardText>
              SRL-uri, SA-uri de orice dimensiune care au nevoie de un sistem
              complet pentru contabilitate și gestiune.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><LibraryIcon /></CardIcon>
            <CardTitle>Instituții publice</CardTitle>
            <CardText>
              Primării, consilii județene, instituții subordonate care necesită
              raportare specifică bugetului public.
            </CardText>
          </Card>

          <Card>
            <CardIcon><BuildingIcon /></CardIcon>
            <CardTitle>Regii autonome</CardTitle>
            <CardText>
              Companii de utilități, transport și servicii publice cu cerințe
              complexe de evidență și raportare.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* Stats */}
      <Section variant="white">
        <Stats>
          <Stat number="300+" label="Companii utilizatoare" />
          <Stat number="20+" label="Ani de dezvoltare" />
          <Stat number="6" label="Module integrate" />
          <Stat number="100%" label="Conformitate legislativă" />
        </Stats>
      </Section>

      {/* CTA */}
      <Section>
        <CTA
          title="Vrei să vezi ERP Sintec în acțiune?"
          description="Programează o demonstrație gratuită și descoperă cum poate simplifica procesele financiar-contabile din organizația ta."
          buttonText="Programează demonstrație"
          buttonTo="/contact"
        />
      </Section>
    </>
  )
}

export default ErpSintec
