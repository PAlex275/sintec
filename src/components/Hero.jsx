function Hero({ badge, title, titleHighlight, description, children, small = false }) {
  return (
    <section className={`hero ${small ? 'hero--small' : ''}`}>
      <div className="hero__pattern"></div>
      <div className="container">
        <div className="hero__content">
          {badge && <span className="hero__badge">{badge}</span>}
          <h1 className="hero__title">
            {title} {titleHighlight && <span>{titleHighlight}</span>}
          </h1>
          {description && <p className="hero__description">{description}</p>}
          {children && <div className="hero__actions">{children}</div>}
        </div>
      </div>
    </section>
  )
}

export default Hero
