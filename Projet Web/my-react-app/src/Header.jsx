import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1 className="header_title">The Last of Us Part 1 Wiki</h1>
      <nav>
        <ul className="pages_list">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/ennemis">Ennemis</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
