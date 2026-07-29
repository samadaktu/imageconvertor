import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} Image4me. All rights reserved. | Developed by{' '}
            <a 
              href="https://technoalig.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="developer-link"
            >
              Techno Alig
            </a>
          </p>
          <nav className="footer-nav">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
