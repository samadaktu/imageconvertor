import React, { useState } from 'react';
import SEO from '../components/SEO';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <SEO 
        title="Contact Us - Image4me Image Converter Support"
        description="Have questions or feedback about Image4me? Get in touch with our team for support regarding image conversion, WebP compression, or feature requests."
        keywords="contact image4me, image converter support, webp converter feedback"
        canonicalPath="/contact"
      />
      <main className="main-content page-content">

      <div className="container" style={{ maxWidth: '720px' }}>
        <div className="glass page-card">
          <h1 className="hero-title" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            Get in <span className="gradient-text">Touch</span>
          </h1>
          
          {submitted ? (
            <div className="contact-success-msg">
              Thank you for contacting us! We have received your message and will respond soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Jane Doe"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="jane@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  required 
                  rows="5"
                  placeholder="How can we help you?"
                  className="form-input form-textarea"
                />
              </div>

              <button type="submit" className="btn-cloud-red contact-submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
    </>
  );
}

export default Contact;

