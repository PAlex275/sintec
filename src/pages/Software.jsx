import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { Section, SectionHeader } from '../components/Section'
import { Button, ArrowIcon } from '../components/Button'
import { Card, CardIcon, CardTitle, CardText, CardLink, CardGrid, ProductCard } from '../components/Card'
import CTA from '../components/CTA'
import {
  CalculatorIcon,
  BuildingIcon,
  CodeIcon,
  BriefcaseIcon,
  HeartIcon,
  PuzzleIcon
} from '../components/Icons'

function Software() {
  return (
    <>
      <Hero
        small
        badge="Produse software"
        title="Soluții pentru"
        titleHighlight="fiecare nevoie"
        description="De la sisteme ERP complete până la aplicații personalizate, oferim software de calitate care transformă modul în care lucrezi."
      />

      {/* Products Overview */}
      <Section variant="white">
        <SectionHeader
          badge="Portofoliu"
          title="Produsele noastre principale"
          description="Trei linii de produse care acoperă nevoile companiilor, spitalelor și ale organizațiilor care au cerințe specifice."
        />

        <CardGrid columns={3}>
          <ProductCard
            icon={<CalculatorIcon size={64} />}
            title="ERP Sintec"
            text="Sistem integrat pentru gestiunea completă a afacerii: contabilitate, salarizare, gestiune stocuri, mijloace fixe și raportare financiară."
            to="/erp-sintec"
          />
          <ProductCard
            icon={<BuildingIcon size={64} />}
            title="DIASAN"
            text="Sistem informatic medical complet pentru spitale: internări, consultații, farmacie, laborator, bloc operator și raportări CNAS."
            to="/diasan"
            gradient="linear-gradient(135deg, #324376, #586BA4)"
          />
          <ProductCard
            icon={<CodeIcon size={64} />}
            title="Aplicații personalizate"
            text="Dezvoltare software la comandă pentru automatizarea proceselor specifice și integrarea cu sistemele existente."
            to="/aplicatii-personalizate"
            gradient="linear-gradient(135deg, #586BA4, #F5DD90)"
          />
        </CardGrid>
      </Section>

      {/* Comparison */}
      <Section>
        <SectionHeader
          badge="Comparație"
          title="Care soluție ți se potrivește?"
        />

        <CardGrid columns={3}>
          <Card>
            <CardIcon><BriefcaseIcon /></CardIcon>
            <CardTitle>ERP Sintec</CardTitle>
            <CardText>Ideal pentru:</CardText>
            <ul style={{ color: 'var(--color-gray-500)', fontSize: '0.95rem', paddingLeft: '1.25rem', marginBottom: 'var(--space-md)' }}>
              <li>Companii private</li>
              <li>Instituții publice</li>
              <li>Regii autonome</li>
              <li>Societăți comerciale</li>
            </ul>
            <CardLink to="/erp-sintec">Află mai multe</CardLink>
          </Card>

          <Card>
            <CardIcon accent><HeartIcon /></CardIcon>
            <CardTitle>DIASAN</CardTitle>
            <CardText>Ideal pentru:</CardText>
            <ul style={{ color: 'var(--color-gray-500)', fontSize: '0.95rem', paddingLeft: '1.25rem', marginBottom: 'var(--space-md)' }}>
              <li>Spitale publice</li>
              <li>Spitale private</li>
              <li>Clinici medicale</li>
              <li>Centre de diagnostic</li>
            </ul>
            <CardLink to="/diasan">Află mai multe</CardLink>
          </Card>

          <Card>
            <CardIcon><PuzzleIcon /></CardIcon>
            <CardTitle>Aplicații personalizate</CardTitle>
            <CardText>Ideal pentru:</CardText>
            <ul style={{ color: 'var(--color-gray-500)', fontSize: '0.95rem', paddingLeft: '1.25rem', marginBottom: 'var(--space-md)' }}>
              <li>Procese unice</li>
              <li>Integrări complexe</li>
              <li>Automatizări specifice</li>
              <li>Cerințe non-standard</li>
            </ul>
            <CardLink to="/aplicatii-personalizate">Află mai multe</CardLink>
          </Card>
        </CardGrid>
      </Section>

      {/* Technology */}
      <Section variant="dark">
        <SectionHeader
          badge="Tehnologii"
          title="Construite pe fundații solide"
          description="Folosim tehnologii moderne și practici de dezvoltare care asigură performanță, securitate și scalabilitate."
        />

        <CardGrid>
          <Card>
            <CardTitle>Baze de date robuste</CardTitle>
            <CardText>
              Microsoft SQL Server și alte sisteme de gestiune a bazelor de date
              care asigură integritatea și securitatea datelor.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Arhitectură modernă</CardTitle>
            <CardText>
              Aplicații client-server și web, cu posibilitate de acces de la distanță
              și integrare cu alte sisteme.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Securitate integrată</CardTitle>
            <CardText>
              Criptare date, control acces pe roluri, jurnalizare operațiuni și
              backup automat pentru protecția informațiilor.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Conformitate legală</CardTitle>
            <CardText>
              Actualizări constante pentru conformitatea cu legislația fiscală,
              contabilă și cerințele GDPR.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* CTA */}
      <Section>
        <CTA
          title="Nu ești sigur ce soluție ai nevoie?"
          description="Contactează-ne pentru o consultație gratuită. Analizăm nevoile tale și îți recomandăm soluția potrivită."
          buttonText="Cere consultație gratuită"
          buttonTo="/contact"
        />
      </Section>
    </>
  )
}

export default Software
