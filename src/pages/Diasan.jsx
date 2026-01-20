import Hero from '../components/Hero'
import { Section, SectionHeader } from '../components/Section'
import { Button, ArrowIcon } from '../components/Button'
import { Card, CardIcon, CardTitle, CardText, CardGrid } from '../components/Card'
import { Stats, Stat } from '../components/Stats'
import CTA from '../components/CTA'
import {
  BuildingIcon,
  UserIcon,
  CalendarIcon,
  FlaskIcon,
  ClipboardIcon,
  ImageIcon,
  HeartIcon,
  MoneyIcon,
  ChartIcon,
  CheckIcon
} from '../components/Icons'

function Diasan() {
  return (
    <>
      <Hero
        small
        badge="Sistem medical"
        title=""
        titleHighlight="DIASAN"
        description="Sistem informatic complet pentru spitale care acoperă întregul circuit al pacientului: de la internare până la externare și raportarea către CNAS."
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
            <h2>Soluția completă pentru spitalul tău</h2>
            <p>
              DIASAN este rezultatul a peste 15 ani de experiență în informatica
              medicală. Sistemul a fost dezvoltat în strânsă colaborare cu medicii
              și personalul medical pentru a răspunde nevoilor reale ale unui spital.
            </p>
            <p>
              Modulele DIASAN acoperă toate departamentele spitalului: secții cu
              paturi, ambulatoriu, farmacie, laborator, radiologie, bloc operator,
              și se integrează cu modulele financiar-contabile.
            </p>
            <div className="features-list mt-2">
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Raportare CNAS automată</h4>
                  <p>Generare automată a fișierelor de raportare.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Dosarul electronic al pacientului</h4>
                  <p>Toată istoricul medical într-un singur loc.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Integrare aparatură</h4>
                  <p>Conectare cu echipamente medicale și de laborator.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="split__image" style={{ background: 'linear-gradient(135deg, #324376, #586BA4)' }}>
            <BuildingIcon size={120} />
          </div>
        </div>
      </Section>

      {/* Modules */}
      <Section id="module">
        <SectionHeader
          badge="Module"
          title="Arhitectura sistemului"
          description="DIASAN este format din module specializate pe departamente, toate integrate într-o bază de date unică."
        />

        <CardGrid columns={3}>
          <Card>
            <CardIcon><UserIcon /></CardIcon>
            <CardTitle>Internări</CardTitle>
            <CardText>
              Gestionarea internărilor, transferurilor și externărilor. Evidența
              paturilor, foile de observație, epicrize.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><CalendarIcon /></CardIcon>
            <CardTitle>Ambulatoriu</CardTitle>
            <CardText>
              Programări, consultații, investigații. Gestionarea cabinetelor
              de specialitate și a listelor de așteptare.
            </CardText>
          </Card>

          <Card>
            <CardIcon><FlaskIcon /></CardIcon>
            <CardTitle>Farmacie</CardTitle>
            <CardText>
              Gestiunea stocurilor de medicamente, eliberare pe secții și la
              pacienți, evidența consumurilor, comenzi automate.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><ClipboardIcon /></CardIcon>
            <CardTitle>Laborator</CardTitle>
            <CardText>
              Cereri de analize, recoltare, validare rezultate. Integrare cu
              analizoare, istoricul analizelor pacientului.
            </CardText>
          </Card>

          <Card>
            <CardIcon><ImageIcon /></CardIcon>
            <CardTitle>Radiologie</CardTitle>
            <CardText>
              Programări investigații imagistice, rezultate, integrare PACS.
              Acces la imagini din orice punct al spitalului.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><HeartIcon /></CardIcon>
            <CardTitle>Bloc operator</CardTitle>
            <CardText>
              Planificarea intervențiilor chirurgicale, protocoale operatorii,
              evidența echipelor și a sălilor de operație.
            </CardText>
          </Card>

          <Card>
            <CardIcon><MoneyIcon /></CardIcon>
            <CardTitle>Facturare CNAS</CardTitle>
            <CardText>
              Generare automată a raportărilor și facturilor pentru Casa de
              Asigurări de Sănătate, validări, reconcilieri.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><ChartIcon /></CardIcon>
            <CardTitle>Statistici și rapoarte</CardTitle>
            <CardText>
              Dashboard-uri în timp real, indicatori de performanță, rapoarte
              obligatorii către MS și alte instituții.
            </CardText>
          </Card>

          <Card>
            <CardIcon><BuildingIcon /></CardIcon>
            <CardTitle>Bucătărie</CardTitle>
            <CardText>
              Diete pacienți, comenzi mâncare pe secții, evidența porțiilor,
              planificarea meniurilor.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* Benefits */}
      <Section variant="dark">
        <SectionHeader
          badge="Beneficii"
          title="De ce DIASAN?"
        />

        <CardGrid columns={2}>
          <Card>
            <CardTitle>Reducerea timpului administrativ</CardTitle>
            <CardText>
              Personalul medical petrece mai puțin timp cu actele și mai mult
              timp cu pacienții. Formulare pre-completate, copiere date între
              documente, generare automată a rapoartelor.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Eliminarea erorilor de transcriere</CardTitle>
            <CardText>
              Datele se introduc o singură dată și circulă în tot sistemul.
              Nu mai există risc de erori la copierea între documente sau la
              transcrierea rezultatelor.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Acces instant la istoricul pacientului</CardTitle>
            <CardText>
              Dosarul electronic conține toate internările, investigațiile și
              tratamentele anterioare. Medicul are imaginea completă în câteva
              secunde.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Conformitate garantată</CardTitle>
            <CardText>
              Sistemul este actualizat prompt la orice modificare a cerințelor
              CNAS sau ale Ministerului Sănătății. Nu ratezi niciodată un termen
              de raportare.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* Stats */}
      <Section variant="white">
        <Stats>
          <Stat number="50+" label="Spitale echipate" />
          <Stat number="15+" label="Ani de dezvoltare" />
          <Stat number="9" label="Module integrate" />
          <Stat number="24/7" label="Suport tehnic" />
        </Stats>
      </Section>

      {/* CTA */}
      <Section>
        <CTA
          title="Vrei să modernizezi sistemul informatic al spitalului?"
          description="Contactează-ne pentru o prezentare detaliată a DIASAN și o analiză gratuită a nevoilor spitalului tău."
          buttonText="Programează prezentare"
          buttonTo="/contact"
        />
      </Section>
    </>
  )
}

export default Diasan
