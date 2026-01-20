import Hero from '../components/Hero'
import { Section, SectionHeader } from '../components/Section'
import { Button, ArrowIcon } from '../components/Button'
import { Card, CardIcon, CardTitle, CardText, CardGrid, FeatureCard } from '../components/Card'
import CTA from '../components/CTA'
import {
  CodeIcon,
  ComputerIcon,
  GlobeIcon,
  MobileIcon,
  TerminalIcon,
  ChartIcon,
  DatabaseIcon,
  CheckIcon
} from '../components/Icons'

function AplicatiiPersonalizate() {
  return (
    <>
      <Hero
        small
        badge="Dezvoltare la comandă"
        title="Aplicații"
        titleHighlight="personalizate"
        description="Când soluțiile standard nu acoperă nevoile tale specifice, dezvoltăm software la comandă, adaptat perfect proceselor tale."
      >
        <Button to="/contact" variant="primary" size="lg">
          Discută proiectul tău
        </Button>
      </Hero>

      {/* When custom */}
      <Section variant="white">
        <div className="split">
          <div className="split__content">
            <span className="section__badge">Când ai nevoie</span>
            <h2>Soluții pentru cerințe unice</h2>
            <p>
              Fiecare organizație are particularități. Uneori, procesele de lucru
              sunt atât de specifice încât nu pot fi acoperite de software-ul
              standard disponibil pe piață.
            </p>
            <p>
              În aceste situații, dezvoltarea unei aplicații personalizate este
              soluția optimă. Obții exact funcționalitățile de care ai nevoie,
              fără compromisuri sau adaptări forțate.
            </p>
            <div className="features-list mt-2">
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Procese unice de business</h4>
                  <p>Fluxuri de lucru specifice industriei tale.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Integrări complexe</h4>
                  <p>Conectare cu sisteme existente sau echipamente.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Automatizări specifice</h4>
                  <p>Eliminarea sarcinilor repetitive și manuale.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="split__image" style={{ background: 'linear-gradient(135deg, #586BA4, #F5DD90)' }}>
            <CodeIcon size={120} />
          </div>
        </div>
      </Section>

      {/* Types of applications */}
      <Section>
        <SectionHeader
          badge="Ce dezvoltăm"
          title="Tipuri de aplicații"
          description="Am dezvoltat de-a lungul timpului o gamă variată de aplicații pentru clienți din diverse industrii."
        />

        <CardGrid columns={3}>
          <Card>
            <CardIcon><ComputerIcon /></CardIcon>
            <CardTitle>Aplicații desktop</CardTitle>
            <CardText>
              Software pentru stații de lucru Windows, optimizat pentru utilizare
              intensivă și integrare cu periferice locale.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><GlobeIcon /></CardIcon>
            <CardTitle>Aplicații web</CardTitle>
            <CardText>
              Platforme accesibile din browser, pentru lucru de la distanță sau
              colaborare între mai multe locații.
            </CardText>
          </Card>

          <Card>
            <CardIcon><MobileIcon /></CardIcon>
            <CardTitle>Aplicații mobile</CardTitle>
            <CardText>
              Aplicații pentru dispozitive mobile, utile pentru echipe din teren
              sau acces rapid la informații.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><TerminalIcon /></CardIcon>
            <CardTitle>Integrări și API-uri</CardTitle>
            <CardText>
              Conectoare între sisteme diferite, sincronizare date, automatizare
              fluxuri între aplicații.
            </CardText>
          </Card>

          <Card>
            <CardIcon><ChartIcon /></CardIcon>
            <CardTitle>Rapoarte și analize</CardTitle>
            <CardText>
              Sisteme de raportare personalizate, dashboard-uri cu indicatori
              cheie, analize de date.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><DatabaseIcon /></CardIcon>
            <CardTitle>Migrări de date</CardTitle>
            <CardText>
              Transfer date din sisteme vechi, curățare și transformare date,
              migrare către noi platforme.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* Process */}
      <Section variant="dark">
        <SectionHeader
          badge="Procesul nostru"
          title="Cum lucrăm"
          description="Un proces structurat care asigură că rezultatul final corespunde exact nevoilor tale."
        />

        <CardGrid>
          <Card>
            <CardIcon>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem' }}>1</span>
            </CardIcon>
            <CardTitle>Analiză și specificații</CardTitle>
            <CardText>
              Discutăm cu tine pentru a înțelege în detaliu procesele, cerințele
              și obiectivele. Documentăm totul într-o specificație clară.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem' }}>2</span>
            </CardIcon>
            <CardTitle>Design și prototip</CardTitle>
            <CardText>
              Creăm machete ale interfețelor și un prototip funcțional pentru
              validare înainte de dezvoltarea completă.
            </CardText>
          </Card>

          <Card>
            <CardIcon>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem' }}>3</span>
            </CardIcon>
            <CardTitle>Dezvoltare iterativă</CardTitle>
            <CardText>
              Construim aplicația în etape, cu livrări intermediare pentru
              feedback și ajustări pe parcurs.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem' }}>4</span>
            </CardIcon>
            <CardTitle>Testare și lansare</CardTitle>
            <CardText>
              Testare riguroasă, instruirea utilizatorilor și punerea în
              funcțiune la sediul tău.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* Examples */}
      <Section variant="white">
        <SectionHeader
          badge="Exemple"
          title="Proiecte realizate"
          description="Câteva exemple de aplicații personalizate dezvoltate pentru clienții noștri."
        />

        <CardGrid columns={2}>
          <FeatureCard>
            <CardTitle>Sistem de gestiune pentru transport</CardTitle>
            <CardText>
              Aplicație pentru o companie de transport public care gestionează
              parcul auto, programările șoferilor, consumul de carburant și
              întreținerea vehiculelor.
            </CardText>
          </FeatureCard>

          <FeatureCard>
            <CardTitle>Portal pentru managementul proiectelor</CardTitle>
            <CardText>
              Platformă web pentru o firmă de construcții care permite urmărirea
              proiectelor, alocarea resurselor și comunicarea cu subcontractorii.
            </CardText>
          </FeatureCard>

          <FeatureCard>
            <CardTitle>Sistem de programări online</CardTitle>
            <CardText>
              Aplicație pentru o clinică privată care permite pacienților să-și
              facă programări online, cu integrare în sistemul intern.
            </CardText>
          </FeatureCard>

          <FeatureCard>
            <CardTitle>Automatizare documente</CardTitle>
            <CardText>
              Sistem pentru o primărie care generează automat documente tipizate
              pe baza datelor introduse, reducând timpul de procesare.
            </CardText>
          </FeatureCard>
        </CardGrid>
      </Section>

      {/* CTA */}
      <Section>
        <CTA
          title="Ai un proiect în minte?"
          description="Spune-ne despre provocarea ta și hai să vedem împreună cum poate fi rezolvată printr-o aplicație personalizată."
          buttonText="Discută cu noi"
          buttonTo="/contact"
        />
      </Section>
    </>
  )
}

export default AplicatiiPersonalizate
