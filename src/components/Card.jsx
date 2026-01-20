import { Link } from 'react-router-dom'

function Card({ children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}

function CardIcon({ children, accent = false }) {
  return (
    <div className={`card__icon ${accent ? 'card__icon--accent' : ''}`}>
      {children}
    </div>
  )
}

function CardTitle({ children }) {
  return <h3 className="card__title">{children}</h3>
}

function CardText({ children }) {
  return <p className="card__text">{children}</p>
}

function CardLink({ to, children }) {
  return (
    <Link to={to} className="card__link">
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </Link>
  )
}

function CardGrid({ children, columns = 'auto' }) {
  const gridClass = columns === 2 ? 'card-grid--2' : columns === 3 ? 'card-grid--3' : ''
  return <div className={`card-grid ${gridClass}`}>{children}</div>
}

// Product Card
function ProductCard({ icon, title, text, to, gradient }) {
  return (
    <article className="product-card">
      <div
        className="product-card__image"
        style={gradient ? { background: gradient } : undefined}
      >
        {icon}
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__text">{text}</p>
        <Link to={to} className="btn btn--secondary">
          Află mai multe
        </Link>
      </div>
    </article>
  )
}

// Feature Card
function FeatureCard({ children, className = '' }) {
  return <div className={`feature-card ${className}`}>{children}</div>
}

export {
  Card,
  CardIcon,
  CardTitle,
  CardText,
  CardLink,
  CardGrid,
  ProductCard,
  FeatureCard
}
