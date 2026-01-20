import Hero from '../components/Hero'
import { Section, SectionHeader } from '../components/Section'
import { Button, ArrowIcon } from '../components/Button'
import { Card, CardIcon, CardTitle, CardText, CardGrid } from '../components/Card'
import CTA from '../components/CTA'
import {
  CogIcon,
  BookIcon,
  SupportIcon,
  RefreshIcon,
  DocumentIcon,
  DatabaseIcon
} from '../components/Icons'

function Servicii() {
  return (
    <>
      <Hero
        small
        badge="Servicii profesionale"
        title="Suport"
        titleHighlight="complet pentru IT"
        description="De la implementarea inițială până la suportul continuu, te însoțim în fiecare etapă pentru a asigura succesul proiectului tău IT."
      />

      {/* Main Services */}
      <Section variant="white">
        <SectionHeader
          badge="Ce oferim"
          title="Serviciile noastre"
          description="O gamă completă de servicii care acoperă întregul ciclu de viață al soluțiilor software."
        />

        <CardGrid columns={3}>
          <Card>
            <CardIcon><CogIcon /></CardIcon>
            <CardTitle>Implementare</CardTitle>
            <CardText>
              Instalare, configurare și personalizare a software-ului conform
              cerințelor specifice ale organizației tale.
            </CardText>
            <ul style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', paddingLeft: '1.25rem' }}>
              <li>Analiză cerințe</li>
              <li>Configurare sistem</li>
              <li>Migrare date</li>
              <li>Testare și validare</li>
            </ul>
          </Card>

          <Card>
            <CardIcon accent><BookIcon /></CardIcon>
            <CardTitle>Instruire</CardTitle>
            <CardText>
              Sesiuni de training pentru utilizatori și administratori,
              adaptate nivelului de experiență.
            </CardText>
            <ul style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', paddingLeft: '1.25rem' }}>
              <li>Training la sediu</li>
              <li>Sesiuni online</li>
              <li>Materiale documentare</li>
              <li>Certificare utilizatori</li>
            </ul>
          </Card>

          <Card>
            <CardIcon><SupportIcon /></CardIcon>
            <CardTitle>Suport tehnic</CardTitle>
            <CardText>
              Asistență promptă pentru rezolvarea problemelor și întrebărilor
              utilizatorilor.
            </CardText>
            <ul style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', paddingLeft: '1.25rem' }}>
              <li>Helpdesk telefonic</li>
              <li>Suport prin email</li>
              <li>Asistență remote</li>
              <li>Intervenție la sediu</li>
            </ul>
          </Card>

          <Card>
            <CardIcon accent><RefreshIcon /></CardIcon>
            <CardTitle>Mentenanță</CardTitle>
            <CardText>
              Actualizări periodice, optimizări și întreținere preventivă
              pentru funcționare optimă.
            </CardText>
            <ul style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', paddingLeft: '1.25rem' }}>
              <li>Actualizări software</li>
              <li>Patch-uri de securitate</li>
              <li>Optimizare performanță</li>
              <li>Backup și recuperare</li>
            </ul>
          </Card>

          <Card>
            <CardIcon><DocumentIcon /></CardIcon>
            <CardTitle>Consultanță</CardTitle>
            <CardText>
              Analiză și recomandări pentru optimizarea proceselor și
              alegerea soluțiilor potrivite.
            </CardText>
            <ul style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', paddingLeft: '1.25rem' }}>
              <li>Audit IT</li>
              <li>Analiză procese</li>
              <li>Recomandări soluții</li>
              <li>Planificare implementare</li>
            </ul>
          </Card>

          <Card>
            <CardIcon accent><DatabaseIcon /></CardIcon>
            <CardTitle>Administrare baze de date</CardTitle>
            <CardText>
              Gestionarea și optimizarea bazelor de date pentru performanță
              și siguranță maximă.
            </CardText>
            <ul style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', paddingLeft: '1.25rem' }}>
              <li>Monitorizare performanță</li>
              <li>Optimizare interogări</li>
              <li>Strategii backup</li>
              <li>Recuperare dezastre</li>
            </ul>
          </Card>
        </CardGrid>
      </Section>

      {/* Support Plans */}
      <Section>
        <SectionHeader
          badge="Pachete suport"
          title="Planuri de asistență"
          description="Alege nivelul de suport potrivit pentru organizația ta."
        />

        <CardGrid columns={3}>
          <Card>
            <CardTitle>Standard</CardTitle>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', marginBottom: 'var(--space-lg)' }}>
              Pentru organizații mici
            </p>
            <ul style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', listStyle: 'none', marginBottom: 'var(--space-xl)' }}>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ Suport telefonic L-V, 9-17
              </li>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ Răspuns în 24h
              </li>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ Actualizări incluse
              </li>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ Asistență remote
              </li>
            </ul>
            <Button to="/contact" variant="secondary" style={{ width: '100%' }}>Cere ofertă</Button>
          </Card>

          <Card style={{ border: '2px solid var(--color-primary)', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: 'white', padding: 'var(--space-xs) var(--space-md)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600 }}>RECOMANDAT</span>
            <CardTitle>Business</CardTitle>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', marginBottom: 'var(--space-lg)' }}>
              Pentru organizații medii
            </p>
            <ul style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', listStyle: 'none', marginBottom: 'var(--space-xl)' }}>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ Suport telefonic L-V, 8-18
              </li>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ Răspuns în 8h
              </li>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ Actualizări incluse
              </li>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ Asistență remote prioritară
              </li>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ 2 vizite la sediu / an
              </li>
            </ul>
            <Button to="/contact" variant="primary" style={{ width: '100%' }}>Cere ofertă</Button>
          </Card>

          <Card>
            <CardTitle>Enterprise</CardTitle>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', marginBottom: 'var(--space-lg)' }}>
              Pentru organizații mari
            </p>
            <ul style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', listStyle: 'none', marginBottom: 'var(--space-xl)' }}>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ Suport 24/7
              </li>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ Răspuns în 4h
              </li>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ Actualizări prioritare
              </li>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ Manager cont dedicat
              </li>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ Vizite nelimitate
              </li>
              <li style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                ✓ SLA personalizat
              </li>
            </ul>
            <Button to="/contact" variant="secondary" style={{ width: '100%' }}>Cere ofertă</Button>
          </Card>
        </CardGrid>
      </Section>

      {/* Why us */}
      <Section variant="dark">
        <SectionHeader
          badge="Avantaje"
          title="De ce să alegi serviciile noastre"
        />

        <CardGrid>
          <Card>
            <CardTitle>Experiență în domeniu</CardTitle>
            <CardText>
              Peste 25 de ani de activitate în IT și sute de implementări
              de succes ne oferă expertiza necesară pentru orice proiect.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Echipă locală</CardTitle>
            <CardText>
              Suntem în România, vorbim româna și înțelegem specificul
              afacerilor și instituțiilor locale.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Răspuns rapid</CardTitle>
            <CardText>
              Timpii noștri de răspuns sunt dintre cei mai buni din industrie.
              Nu te lăsăm să aștepți când ai o problemă urgentă.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Transparență</CardTitle>
            <CardText>
              Prețuri clare, termene realiste, comunicare constantă.
              Știi mereu în ce stadiu se află solicitarea ta.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* CTA */}
      <Section>
        <CTA
          title="Ai nevoie de suport IT?"
          description="Contactează-ne pentru a discuta nevoile tale și a primi o ofertă personalizată."
          buttonText="Contactează-ne"
          buttonTo="/contact"
        />
      </Section>
    </>
  )
}

export default Servicii
