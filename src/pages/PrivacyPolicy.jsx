import React from 'react';
import SEO from '../components/SEO';

function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy - Client-Side Data Protection | Image4me"
        description="Read the Image4me Privacy Policy. All PNG to WebP and JPG to WebP conversions happen locally in your browser memory with zero server uploads."
        keywords="privacy policy image4me, client side privacy, browser image converter security"
        canonicalPath="/privacy"
      />
      <main className="main-content page-content">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="glass page-card">
            <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-xl)' }}>
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            
            <div className="page-body">
              <p className="page-paragraph">Last updated: April 05, 2026</p>
              
              <h3 style={{ color: 'var(--color-text-dark)', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-xs)', fontSize: '1.2rem' }}>1. Information We Do Not Collect</h3>
              <p className="page-paragraph">
                We prioritize your privacy above all else. This application processes all image files entirely within your device&apos;s browser memory (client-side). We do not upload, transmit, store, or view any of the media files you convert.
              </p>

              <h3 style={{ color: 'var(--color-text-dark)', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-xs)', fontSize: '1.2rem' }}>2. Cookies and Tracking</h3>
              <p className="page-paragraph">
                We do not use tracking cookies or persistent advertising identifiers. Any configuration states (such as your chosen conversion formats) are temporarily saved in your browser session but are entirely local.
              </p>

              <h3 style={{ color: 'var(--color-text-dark)', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-xs)', fontSize: '1.2rem' }}>3. Contact Us</h3>
              <p className="page-paragraph">
                If you have any questions about this Privacy Policy, please contact us via our Contact page.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PrivacyPolicy;

