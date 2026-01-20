import { Button, ArrowIcon } from './Button'

function CTA({ title, description, buttonText, buttonTo }) {
  return (
    <div className="cta">
      <div className="cta__content">
        <h2>{title}</h2>
        <p>{description}</p>
        <Button to={buttonTo} variant="accent" size="lg">
          {buttonText}
          <ArrowIcon />
        </Button>
      </div>
    </div>
  )
}

export default CTA
