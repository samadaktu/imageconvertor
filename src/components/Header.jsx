import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="brand-group">
            <Link to="/" className="brand-logo-link" onClick={closeMobileMenu}>
              <div className="cloud-logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <h1 className="logo-text">
                image<span>convert</span>
              </h1>
            </Link>
            <span className="privacy-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              100% Privacy
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="nav desktop-nav">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
              Converter
            </NavLink>
            <NavLink to="/features" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Features
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </nav>

          <div className="header-actions">
            <div className="desktop-contact-wrapper">
              <Link to="/contact" className="btn-signup-coral">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              className="hamburger-btn" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav Drawer */}
        {mobileMenuOpen && (
          <nav className="mobile-nav-drawer">
            <div className="mobile-nav-links">
              <NavLink to="/" className="mobile-nav-link" onClick={closeMobileMenu} end>
                Converter
              </NavLink>
              <NavLink to="/features" className="mobile-nav-link" onClick={closeMobileMenu}>
                Features
              </NavLink>
              <NavLink to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
                About
              </NavLink>
              <NavLink to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                Contact
              </NavLink>
              <Link to="/contact" className="btn-signup-coral mobile-contact-btn" onClick={closeMobileMenu}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

