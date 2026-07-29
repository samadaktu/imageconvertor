import React from 'react';

function TermsOfService() {
  return (
    <main className="main-content">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="glass" style={{ padding: 'var(--space-3xl)', borderRadius: 'var(--radius-xl)' }}>
          <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-xl)' }}>
            Terms of <span className="gradient-text">Service</span>
          </h1>
          
          <div style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            <p>Last updated: April 05, 2026</p>

            <h3 style={{ color: 'var(--color-white)', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-xs)' }}>1. Acceptance of Terms</h3>
            <p>
              By accessing and using this web application to convert images, you accept and agree to be bound by the terms and provision of this agreement. 
            </p>

            <h3 style={{ color: 'var(--color-white)', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-xs)' }}>2. Use License</h3>
            <p>
              Permission is granted to temporarily use this application for personal, non-commercial transitory viewing and conversion of images. All operations must occur legally, and you must hold the copyright for the material you process.
            </p>

            <h3 style={{ color: 'var(--color-white)', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-xs)' }}>3. Disclaimer</h3>
            <p>
              The materials on this website are provided on an &quot;as is&quot; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TermsOfService;
