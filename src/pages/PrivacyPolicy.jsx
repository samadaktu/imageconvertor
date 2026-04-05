import React from 'react';

function PrivacyPolicy() {
  return (
    <main className="main-content">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="glass" style={{ padding: 'var(--space-3xl)', borderRadius: 'var(--radius-xl)' }}>
          <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-xl)' }}>
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          
          <div style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            <p>Last updated: April 05, 2026</p>
            
            <h3 style={{ color: 'var(--color-white)', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-xs)' }}>1. Information We Do Not Collect</h3>
            <p>
              We prioritize your privacy above all else. This application processes all image files entirely within your device's browser memory (client-side). We do not upload, transmit, store, or view any of the media files you convert.
            </p>

            <h3 style={{ color: 'var(--color-white)', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-xs)' }}>2. Cookies and Tracking</h3>
            <p>
              We do not use tracking cookies or persistent advertising identifiers. Any configuration states (such as your chosen conversion formats) are temporarily saved in your browser session but are entirely local.
            </p>

            <h3 style={{ color: 'var(--color-white)', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-xs)' }}>3. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us via our Contact page.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
