import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission (visual only)
    alert('Thank you for contacting us! This is a visual demo, so no actual email was sent.');
  };

  return (
    <main className="main-content">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="glass" style={{ padding: 'var(--space-3xl)', borderRadius: 'var(--radius-xl)' }}>
          <h1 className="hero-title" style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            Get in <span className="gradient-text">Touch</span>
          </h1>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
              <label style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Name</label>
              <input 
                type="text" 
                required 
                placeholder="Jane Doe"
                style={{ 
                  padding: '1rem', 
                  borderRadius: 'var(--radius-md)', 
                  background: 'rgba(0,0,0,0.2)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: 'white',
                  fontSize: '1rem' 
                }} 
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
              <label style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Email</label>
              <input 
                type="email" 
                required 
                placeholder="jane@example.com"
                style={{ 
                  padding: '1rem', 
                  borderRadius: 'var(--radius-md)', 
                  background: 'rgba(0,0,0,0.2)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: 'white',
                  fontSize: '1rem' 
                }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
              <label style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Message</label>
              <textarea 
                required 
                rows="5"
                placeholder="How can we help you?"
                style={{ 
                  padding: '1rem', 
                  borderRadius: 'var(--radius-md)', 
                  background: 'rgba(0,0,0,0.2)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: 'white',
                  fontSize: '1rem',
                  resize: 'vertical'
                }} 
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--space-md)', padding: '1rem' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
