import React from 'react';

function About() {
  return (
    <main className="main-content">
      <div className="container">
        <div className="glass" style={{ padding: 'var(--space-3xl)', borderRadius: 'var(--radius-xl)' }}>
          <h1 className="hero-title">About <span className="gradient-text">Us</span></h1>
          <div style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Welcome to <strong>Universal Image Converter</strong>! We are dedicated to providing the fastest, most reliable, and secure image conversion tools right in your browser. 
            </p>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Our mission is to help designers, developers, and everyday users seamlessly convert media between modern formats like WEBP, JPEG, and PNG without installing heavy native software or dealing with slow server uploads.
            </p>
            <p>
              By leveraging advanced client-side processing technologies, all operations happen locally on your device. This guarantees 100% privacy and blazing fast speeds.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
