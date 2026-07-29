import React from 'react';

function About() {
  return (
    <main className="main-content page-content">
      <div className="container">
        <div className="glass page-card">
          <h1 className="hero-title">About <span className="gradient-text">Us</span></h1>
          <div className="page-body">
            <p className="page-paragraph">
              Welcome to <strong>Image4me</strong>! We are dedicated to providing the fastest, most reliable, and secure image conversion tools right in your browser. 
            </p>
            <p className="page-paragraph">
              Our mission is to help designers, developers, and everyday users seamlessly convert media between modern formats like WEBP, JPEG, and PNG without installing heavy native software or dealing with slow server uploads.
            </p>
            <p className="page-paragraph">
              By leveraging advanced client-side processing technologies, all operations happen locally on your device. This guarantees 100% privacy and blazing fast speeds.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
