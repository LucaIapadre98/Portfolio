import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg site-nav">
      <div className="container">
        <Link className="brand-link" to="/" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">LI</span>
          <span>Luca Iapadre</span>
        </Link>
        <button
          className="navbar-toggler nav-toggle"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Chiudi il menu' : 'Apri il menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto nav-links">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/strumenti" onClick={closeMenu}>
                Strumenti
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/esperienze" onClick={closeMenu}>
                Esperienze
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contatti" onClick={closeMenu}>
                Contatti
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
