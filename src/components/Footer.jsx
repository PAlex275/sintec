import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">S</span>
              SINTEC
            </div>
            <p className="footer__text">
              Dezvoltăm soluții software de încredere pentru companii și instituții
              din România de peste 25 de ani.
            </p>
          </div>

          <div className="footer__column">
            <h4>Produse</h4>
            <ul className="footer__links">
              <li><Link to="/erp-sintec">ERP Sintec</Link></li>
              <li><Link to="/diasan">DIASAN</Link></li>
              <li><Link to="/aplicatii-personalizate">Aplicații personalizate</Link></li>
              <li><Link to="/hardware">Hardware</Link></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>Companie</h4>
            <ul className="footer__links">
              <li><Link to="/despre">Despre noi</Link></li>
              <li><Link to="/servicii">Servicii</Link></li>
              <li><Link to="/clienti">Clienți</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>Contact</h4>
            <ul className="footer__links">
              <li>Sibiu, România</li>
              <li><a href="tel:+40269210044">+40 269 210 044</a></li>
              <li><a href="mailto:office@sintec.ro">office@sintec.ro</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} SINTEC. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
