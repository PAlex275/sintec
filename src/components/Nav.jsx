import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)
  const toggleRef = useRef(null)

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const isSoftwareActive = () => {
    return ['/software', '/erp-sintec', '/diasan', '/aplicatii-personalizate'].some(
      (path) => location.pathname === path
    )
  }

  return (
    <nav className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-icon">S</span>
          SINTEC
        </Link>

        <ul className={`nav__menu ${menuOpen ? 'nav__menu--open' : ''}`} ref={navRef}>
          <li className="nav__item">
            <Link
              to="/"
              className={`nav__link ${isActive('/') && location.pathname === '/' ? 'nav__link--active' : ''}`}
            >
              Acasă
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/despre"
              className={`nav__link ${isActive('/despre') ? 'nav__link--active' : ''}`}
            >
              Despre noi
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/software"
              className={`nav__link ${isSoftwareActive() ? 'nav__link--active' : ''}`}
            >
              Software ▾
            </Link>
            <div className="nav__dropdown">
              <Link to="/erp-sintec" className="nav__dropdown-link">
                ERP Sintec
              </Link>
              <Link to="/diasan" className="nav__dropdown-link">
                DIASAN
              </Link>
              <Link to="/aplicatii-personalizate" className="nav__dropdown-link">
                Aplicații personalizate
              </Link>
            </div>
          </li>
          <li className="nav__item">
            <Link
              to="/servicii"
              className={`nav__link ${isActive('/servicii') ? 'nav__link--active' : ''}`}
            >
              Servicii
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/hardware"
              className={`nav__link ${isActive('/hardware') ? 'nav__link--active' : ''}`}
            >
              Hardware
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/clienti"
              className={`nav__link ${isActive('/clienti') ? 'nav__link--active' : ''}`}
            >
              Clienți
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/contact"
              className={`nav__link ${isActive('/contact') ? 'nav__link--active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          className="nav__toggle"
          ref={toggleRef}
          aria-label="Meniu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Nav
