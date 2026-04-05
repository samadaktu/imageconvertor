import React from 'react';

function InfoSection() {
  return (
    <section className="info-section">
      <div className="container">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3>Universal Formats</h3>
            <p>Easily convert your images between WebP, JPEG, and PNG. Optimize file sizes while preserving visual quality.</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3>100% Secure</h3>
            <p>Your images are processed locally in your browser. No uploads, no storage, complete privacy guaranteed.</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3>Lightning Fast</h3>
            <p>Batch convert up to 20 images in seconds with our optimized client-side processing engine. Built for pros.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
