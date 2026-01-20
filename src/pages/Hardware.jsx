import Hero from '../components/Hero'
import { Section, SectionHeader } from '../components/Section'
import { Button, ArrowIcon } from '../components/Button'
import { Card, CardIcon, CardTitle, CardText, CardGrid, FeatureCard } from '../components/Card'
import CTA from '../components/CTA'
import {
  ComputerIcon,
  ServerIcon,
  PrinterIcon,
  WifiIcon,
  DatabaseIcon,
  BoltIcon,
  CogIcon,
  CheckIcon
} from '../components/Icons'

function Hardware() {
  return (
    <>
      <Hero
        small
        badge="Echipamente IT"
        title="Soluții"
        titleHighlight="hardware complete"
        description="Furnizăm echipamente IT de calitate și oferim servicii de instalare, configurare și mentenanță pentru infrastructura ta tehnologică."
      />

      {/* Hardware Categories */}
      <Section variant="white">
        <SectionHeader
          badge="Produse"
          title="Categorii de echipamente"
          description="Oferim o gamă completă de echipamente IT de la producători de încredere."
        />

        <CardGrid columns={3}>
          <Card>
            <CardIcon><ComputerIcon /></CardIcon>
            <CardTitle>Calculatoare și laptopuri</CardTitle>
            <CardText>
              Stații de lucru, laptopuri și workstations de la branduri precum
              HP, Dell, Lenovo, configurate pentru nevoile tale.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><ServerIcon /></CardIcon>
            <CardTitle>Servere</CardTitle>
            <CardText>
              Servere tower, rack și blade pentru aplicații critice, cu
              configurații de la entry-level la enterprise.
            </CardText>
          </Card>

          <Card>
            <CardIcon><PrinterIcon /></CardIcon>
            <CardTitle>Imprimante și scanere</CardTitle>
            <CardText>
              Imprimante laser, multifuncționale, scanere de documente pentru
              birou sau volum mare de lucru.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><WifiIcon /></CardIcon>
            <CardTitle>Echipamente de rețea</CardTitle>
            <CardText>
              Routere, switch-uri, access point-uri, firewall-uri pentru
              infrastructuri de rețea sigure și performante.
            </CardText>
          </Card>

          <Card>
            <CardIcon><DatabaseIcon /></CardIcon>
            <CardTitle>Stocare date</CardTitle>
            <CardText>
              Sisteme NAS, SAN, hard disk-uri și SSD-uri pentru stocare
              sigură și acces rapid la date.
            </CardText>
          </Card>

          <Card>
            <CardIcon accent><BoltIcon /></CardIcon>
            <CardTitle>UPS și protecție</CardTitle>
            <CardText>
              Surse neîntreruptibile, stabilizatoare, protecție la supratensiune
              pentru continuitatea activității.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* Services */}
      <Section>
        <div className="split">
          <div className="split__content">
            <span className="section__badge">Servicii hardware</span>
            <h2>Nu doar vindem, ci și instalăm</h2>
            <p>
              Achiziția de echipamente este doar primul pas. Oferim servicii
              complete de implementare pentru a te asigura că infrastructura
              ta funcționează optim.
            </p>
            <div className="features-list mt-2">
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Consultanță și proiectare</h4>
                  <p>Analizăm nevoile și propunem soluția optimă.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Instalare și configurare</h4>
                  <p>Montaj profesional și configurare completă.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Mentenanță și reparații</h4>
                  <p>Service rapid și piese de schimb originale.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckIcon className="feature-item__icon" />
                <div className="feature-item__content">
                  <h4>Garanție extinsă</h4>
                  <p>Opțiuni de garanție peste standard.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="split__image">
            <CogIcon size={120} />
          </div>
        </div>
      </Section>

      {/* Brands */}
      <Section variant="dark">
        <SectionHeader
          badge="Parteneri"
          title="Branduri de încredere"
          description="Lucrăm cu producători recunoscuți pentru calitate și fiabilitate."
        />

        <CardGrid columns={3}>
          <Card className="text-center">
            <CardTitle>HP</CardTitle>
            <CardText>
              Calculatoare, laptopuri, servere și imprimante pentru mediul
              business și enterprise.
            </CardText>
          </Card>

          <Card className="text-center">
            <CardTitle>Dell</CardTitle>
            <CardText>
              Soluții complete de la desktop la data center, cunoscute
              pentru fiabilitate.
            </CardText>
          </Card>

          <Card className="text-center">
            <CardTitle>Lenovo</CardTitle>
            <CardText>
              Laptopuri ThinkPad și servere ThinkSystem pentru productivitate
              și performanță.
            </CardText>
          </Card>

          <Card className="text-center">
            <CardTitle>Cisco</CardTitle>
            <CardText>
              Echipamente de rețea enterprise: routere, switch-uri și
              soluții de securitate.
            </CardText>
          </Card>

          <Card className="text-center">
            <CardTitle>APC</CardTitle>
            <CardText>
              Surse neîntreruptibile și soluții de protecție a infrastructurii
              critice.
            </CardText>
          </Card>

          <Card className="text-center">
            <CardTitle>Microsoft</CardTitle>
            <CardText>
              Licențe Windows, Office și soluții cloud pentru productivitate
              și colaborare.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* Solutions */}
      <Section variant="white">
        <SectionHeader
          badge="Soluții complete"
          title="Pachete integrate"
          description="Combinăm hardware-ul cu software-ul nostru pentru soluții complete, gata de utilizare."
        />

        <CardGrid columns={2}>
          <FeatureCard>
            <CardTitle>Infrastructură pentru ERP</CardTitle>
            <CardText>
              Server, stații de lucru și rețea configurate optim pentru
              rularea ERP Sintec, cu performanță garantată și suport integrat.
            </CardText>
            <Button to="/contact" variant="secondary" className="mt-2">Cere ofertă</Button>
          </FeatureCard>

          <FeatureCard>
            <CardTitle>Infrastructură pentru spitale</CardTitle>
            <CardText>
              Soluție completă pentru DIASAN: servere redundante, stații pentru
              secții, imprimante medicale și rețea securizată.
            </CardText>
            <Button to="/contact" variant="secondary" className="mt-2">Cere ofertă</Button>
          </FeatureCard>
        </CardGrid>
      </Section>

      {/* CTA */}
      <Section>
        <CTA
          title="Ai nevoie de echipamente IT?"
          description="Contactează-ne pentru o ofertă personalizată, cu consultanță inclusă pentru alegerea soluției potrivite."
          buttonText="Cere ofertă"
          buttonTo="/contact"
        />
      </Section>
    </>
  )
}

export default Hardware
