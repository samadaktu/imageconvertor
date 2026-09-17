import React from 'react';
import SEO from '../components/SEO';

function Features() {
  return (
    <>
      <SEO 
        title="Features - High Speed PNG to WebP & Batch Image Converter | Image4me"
        description="Discover Image4me features: PNG to WebP conversion, JPG to WebP compression, 100-image bulk batch processing, client-side browser privacy, and custom quality controls."
        keywords="png to webp features, batch image converter, client side webp conversion, bulk image compressor features"
        canonicalPath="/features"
      />
      <main className="main-content page-content">
        <div className="container">
          <div className="glass page-card">
            <h1 className="hero-title">Powerful <span className="gradient-text">Converter Features</span></h1>
            
            <div className="info-grid" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="info-card">
                <div className="info-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3>Universal Format Conversion</h3>
                <p>Seamlessly convert between PNG, JPG, JPEG, GIF, and WebP formats. Optimize web performance with lossless and lossy compression.</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3>100% Client-Side Privacy</h3>
                <p>We do not upload your images to any server. All processing is executed securely inside your browser using HTML5 Canvas &amp; WebAssembly.</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3>100-File Bulk Batch Processing</h3>
                <p>Drag and drop up to 100 images simultaneously. Convert them in seconds and download as individual files or a single ZIP archive!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Features;

