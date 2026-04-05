import React from 'react';

function Features() {
  return (
    <main className="main-content">
      <div className="container">
        <div className="glass" style={{ padding: 'var(--space-3xl)', borderRadius: 'var(--radius-xl)' }}>
          <h1 className="hero-title">Core <span className="gradient-text">Features</span></h1>
          
          <div className="info-grid" style={{ marginTop: 'var(--space-2xl)' }}>
            <div className="info-card">
              <div className="info-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3>Universal Support</h3>
              <p>Easily swap back and forth between WEBP, JPEG, and PNG formats universally.</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>Privacy Centric</h3>
              <p>We do not upload your images. Processing is done securely inside your browser's private memory.</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>Batch Conversion</h3>
              <p>Drag and drop up to 20 files instantly. Download them all as one ZIP file when done!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Features;
