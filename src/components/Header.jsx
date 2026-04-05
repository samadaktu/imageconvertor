import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className="logo">
              Image<span>Converter</span>
            </h1>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/features" className="nav-link">Features</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
