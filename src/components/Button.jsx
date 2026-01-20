import { Link } from 'react-router-dom'

function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'default',
  className = '',
  type = 'button',
  onClick
}) {
  const classes = `btn btn--${variant} ${size === 'lg' ? 'btn--lg' : ''} ${className}`

  // External link
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  // Internal link (React Router)
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  // Regular button
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

// Arrow icon component for buttons
function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
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
  )
}

export { Button, ArrowIcon }
