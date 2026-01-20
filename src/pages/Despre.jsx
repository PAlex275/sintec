import Hero from '../components/Hero'
import { Section, SectionHeader } from '../components/Section'
import { Button, ArrowIcon } from '../components/Button'
import { Card, CardIcon, CardTitle, CardText, CardGrid } from '../components/Card'
import CTA from '../components/CTA'
import {
  BuildingIcon,
  CheckCircleIcon,
  PartnerIcon,
  BoltIcon,
  ClockIcon,
  DocumentIcon,
  FlaskIcon,
  CodeIcon,
  ComputerIcon,
  SupportIcon
} from '../components/Icons'

function Despre() {
  return (
    <>
      <Hero
        small
        badge="Despre noi"
        title="O echipă dedicată"
        titleHighlight="inovației"
        description="Din 1998, SINTEC dezvoltă soluții software care ajută companiile și instituțiile din România să-și digitalizeze și optimizeze activitatea."
      />

      {/* Our Story */}
      <Section variant="white">
        <div className="split">
          <div className="split__content">
            <span className="section__badge">Povestea noastră</span>
            <h2>De la idee la realitate</h2>
            <p>
              SINTEC a fost fondată în 1998 la Sibiu, cu viziunea de a oferi soluții
              software de calitate pentru piața românească. Am început cu aplicații
              de contabilitate și gestiune, iar astăzi suntem furnizori de sisteme
              integrate pentru companii, spitale și instituții publice.
            </p>
            <p>
              De-a lungul anilor, am crescut alături de clienții noștri, adaptându-ne
              constant la noile cerințe tehnologice și legislative. Experiența acumulată
              ne permite să oferim soluții fiabile și bine documentate.
            </p>
            <p>
              Sediul nostru principal se află în Sibiu, de unde coordonăm implementările
              și oferim suport tehnic clienților din întreaga țară.
            </p>
          </div>
          <div className="split__image">
            <BuildingIcon size={120} />
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <div className="container--narrow" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <SectionHeader
            badge="Istoria noastră"
            title="Momente cheie"
          />

          <div className="timeline">
            <div className="timeline__item">
              <span className="timeline__year">1998</span>
              <h3 className="timeline__title">Înființarea SINTEC</h3>
              <p className="timeline__text">
                Compania este fondată la Sibiu, cu focus pe dezvoltarea de aplicații
                de contabilitate pentru companiile locale.
              </p>
            </div>

            <div className="timeline__item">
              <span className="timeline__year">2002</span>
              <h3 className="timeline__title">Lansarea ERP Sintec</h3>
              <p className="timeline__text">
                Prima versiune a sistemului ERP integrat, care reunește contabilitatea,
                salarizarea și gestiunea într-o singură platformă.
              </p>
            </div>

            <div className="timeline__item">
              <span className="timeline__year">2006</span>
              <h3 className="timeline__title">Dezvoltarea DIASAN</h3>
              <p className="timeline__text">
                Începe dezvoltarea sistemului informatic pentru spitale, care va deveni
                unul dintre cele mai utilizate sisteme din țară.
              </p>
            </div>

            <div className="timeline__item">
              <span className="timeline__year">2010</span>
              <h3 className="timeline__title">Extindere națională</h3>
              <p className="timeline__text">
                SINTEC devine furnizor pentru spitale și instituții publice din mai
                multe județe, consolidându-și prezența la nivel național.
              </p>
            </div>

            <div className="timeline__item">
              <span className="timeline__year">2015</span>
              <h3 className="timeline__title">Modernizare tehnologică</h3>
              <p className="timeline__text">
                Tranziția către tehnologii web moderne și lansarea versiunilor cloud
                ale produselor principale.
              </p>
            </div>

            <div className="timeline__item">
              <span className="timeline__year">2020</span>
              <h3 className="timeline__title">Suport în pandemie</h3>
              <p className="timeline__text">
                Implementare rapidă de module pentru gestionarea situațiilor de urgență
                în spitalele partenere.
              </p>
            </div>

            <div className="timeline__item">
              <span className="timeline__year">Prezent</span>
              <h3 className="timeline__title">Continuăm să creștem</h3>
              <p className="timeline__text">
                Peste 500 de clienți activi și o echipă dedicată dezvoltării continue
                a produselor și serviciilor noastre.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="dark">
        <SectionHeader
          badge="Valorile noastre"
          title="Principii care ne ghidează"
        />

        <CardGrid columns={3}>
          <Card>
            <CardIcon><CheckCircleIcon /></CardIcon>
            <CardTitle>Calitate</CardTitle>
            <CardText>
              Fiecare linie de cod și fiecare implementare trece printr-un proces
              riguros de testare și validare.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><PartnerIcon /></CardIcon>
            <CardTitle>Parteneriat</CardTitle>
            <CardText>
              Tratăm fiecare client ca un partener pe termen lung, nu doar ca o
              tranzacție comercială.
            </CardText>
          </Card>

          <Card>
            <CardIcon><BoltIcon /></CardIcon>
            <CardTitle>Inovație</CardTitle>
            <CardText>
              Urmărim constant noile tehnologii și le integrăm în produsele noastre
              pentru a oferi soluții moderne.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><ClockIcon /></CardIcon>
            <CardTitle>Promptitudine</CardTitle>
            <CardText>
              Răspundem rapid la solicitări și ne asigurăm că fiecare problemă
              este rezolvată în timp util.
            </CardText>
          </Card>

          <Card>
            <CardIcon><DocumentIcon /></CardIcon>
            <CardTitle>Transparență</CardTitle>
            <CardText>
              Comunicare clară cu clienții despre costuri, termene și funcționalități,
              fără surprize neplăcute.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><FlaskIcon /></CardIcon>
            <CardTitle>Adaptabilitate</CardTitle>
            <CardText>
              Soluțiile noastre sunt configurabile și se pot adapta cerințelor
              specifice ale fiecărui client.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* Team */}
      <Section variant="white">
        <SectionHeader
          badge="Echipa"
          title="Oamenii din spatele SINTEC"
          description="O echipă multidisciplinară de programatori, consultanți și specialiști în suport tehnic, dedicați succesului clienților noștri."
        />

        <CardGrid>
          <Card className="text-center">
            <CardIcon style={{ width: '80px', height: '80px', margin: '0 auto var(--space-lg)', fontSize: '2rem', borderRadius: '50%' }}>
              <CodeIcon size={36} />
            </CardIcon>
            <CardTitle>Dezvoltare software</CardTitle>
            <CardText>
              Programatori cu experiență în tehnologii moderne, responsabili pentru
              crearea și mentenanța produselor noastre.
            </CardText>
          </Card>

          <Card className="text-center">
            <CardIcon accent style={{ width: '80px', height: '80px', margin: '0 auto var(--space-lg)', fontSize: '2rem', borderRadius: '50%' }}>
              <ComputerIcon size={36} />
            </CardIcon>
            <CardTitle>Implementare și consultanță</CardTitle>
            <CardText>
              Specialiști care coordonează instalarea, configurarea și instruirea
              la sediul clienților.
            </CardText>
          </Card>

          <Card className="text-center">
            <CardIcon style={{ width: '80px', height: '80px', margin: '0 auto var(--space-lg)', fontSize: '2rem', borderRadius: '50%' }}>
              <SupportIcon size={36} />
            </CardIcon>
            <CardTitle>Suport tehnic</CardTitle>
            <CardText>
              Echipa de helpdesk disponibilă pentru a rezolva rapid orice problemă
              sau întrebare a utilizatorilor.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* CTA */}
      <Section>
        <CTA
          title="Vrei să afli mai multe?"
          description="Contactează-ne pentru a discuta despre cum putem colabora și ce soluții se potrivesc nevoilor tale."
          buttonText="Contactează-ne"
          buttonTo="/contact"
        />
      </Section>
    </>
  )
}

export default Despre
