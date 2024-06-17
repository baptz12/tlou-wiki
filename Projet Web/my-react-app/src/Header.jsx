import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [wikiMenuOpen, setWikiMenuOpen] = useState(false);

  const toggleWikiMenu = () => {
    setWikiMenuOpen(!wikiMenuOpen);
  };

  return (
    <header className="header">
      <h2 className="header-title">The Last of Us Wiki</h2>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item dropdown">
            <span className="menu-title">Menu</span>
            <ul className="dropdown-menu">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li className="nav-item wiki-dropdown">
                <span className="wiki-button" onClick={toggleWikiMenu}>Wiki ▼</span>
                {wikiMenuOpen && (
                  <ul className="wiki-menu">
                    <li><Link to="/ennemis">Les infectés</Link></li>
                    <li><Link to="/casts">Les personnages</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
