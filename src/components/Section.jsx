function Section({
  children,
  variant = 'default',
  className = '',
  id
}) {
  const variantClasses = {
    default: '',
    white: 'section--white',
    light: 'section--light',
    dark: 'section--dark'
  }

  return (
    <section
      className={`section ${variantClasses[variant]} ${className}`}
      id={id}
    >
      <div className="container">
        {children}
      </div>
    </section>
  )
}

function SectionHeader({ badge, title, description }) {
  return (
    <div className="section__header">
      {badge && <span className="section__badge">{badge}</span>}
      {title && <h2 className="section__title">{title}</h2>}
      {description && <p className="section__description">{description}</p>}
    </div>
  )
}

export { Section, SectionHeader }
