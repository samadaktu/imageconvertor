import React from 'react';
import SEO from '../components/SEO';

function TermsOfService() {
  return (
    <>
      <SEO 
        title="Terms of Service - Image4me Image Converter"
        description="Read the Image4me Terms of Service. Learn about acceptable use, client-side processing terms, and service conditions."
        keywords="terms of service image4me, image converter terms, website terms"
        canonicalPath="/terms"
      />
      <main className="main-content page-content">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="glass page-card">
            <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-xl)' }}>
              Terms of <span className="gradient-text">Service</span>
            </h1>
            
            <div className="page-body">
              <p className="page-paragraph">Last updated: April 05, 2026</p>

              <h3 style={{ color: 'var(--color-text-dark)', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-xs)', fontSize: '1.2rem' }}>1. Acceptance of Terms</h3>
              <p className="page-paragraph">
                By accessing and using this web application to convert images, you accept and agree to be bound by the terms and provision of this agreement. 
              </p>

              <h3 style={{ color: 'var(--color-text-dark)', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-xs)', fontSize: '1.2rem' }}>2. Use License</h3>
              <p className="page-paragraph">
                Permission is granted to temporarily use this application for personal, non-commercial transitory viewing and conversion of images. All operations must occur legally, and you must hold the copyright for the material you process.
              </p>

              <h3 style={{ color: 'var(--color-text-dark)', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-xs)', fontSize: '1.2rem' }}>3. Disclaimer</h3>
              <p className="page-paragraph">
                The materials on this website are provided on an &quot;as is&quot; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TermsOfService;

