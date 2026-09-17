import React from 'react';
import SEO from '../components/SEO';

function About() {
  return (
    <>
      <SEO 
        title="About Us - Fast & Private Image Converter | Image4me"
        description="Learn about Image4me: Our mission is to empower developers, designers, and site owners with free, 100% private, client-side PNG to WebP and JPG to WebP conversion."
        keywords="about image4me, client side webp converter, privacy focused image compression, fast online webp tool"
        canonicalPath="/about"
      />
      <main className="main-content page-content">
        <div className="container">
          <div className="glass page-card">
            <h1 className="hero-title">About <span className="gradient-text">Image4me</span></h1>
            <div className="page-body">
              <p className="page-paragraph">
                Welcome to <strong>Image4me</strong>! We are dedicated to providing the fastest, most reliable, and 100% private image conversion tools directly inside your browser. 
              </p>
              <p className="page-paragraph">
                Our mission is to help web designers, developers, content creators, and everyday users seamlessly convert media between modern formats like <strong>WebP, JPEG, and PNG</strong> without installing heavy software or uploading sensitive images to external servers.
              </p>
              <p className="page-paragraph">
                By leveraging advanced HTML5 Canvas and browser-native JavaScript processing, all conversion tasks happen locally on your device. This guarantees maximum data privacy, instant bulk batch processing (up to 100 images at once), and zero bandwidth waste.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;

