import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
      <header className="header">
          <nav className="nav">
              <ul className="nav-list">
                  <li className="nav-item">
                      <Link to="/">Accueil</Link>
                  </li>
                  <li className="nav-item dropdown">
                      <span>Wiki</span>
                      <ul className="dropdown-menu">
                          <li><Link to="/ennemis">Les infectés</Link></li>
                      </ul>
                  </li>
                  <li className="nav-item">
                      <Link to="/contact">Contact</Link>
                  </li>
              </ul>
          </nav>
      </header>
  );
}

export default Header;
