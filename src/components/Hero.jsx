import React from 'react';
import { motion } from 'framer-motion';

function Hero({ targetFormat = 'webp' }) {
  const targetUpper = targetFormat.toUpperCase();

  return (
    <section className="cloud-hero">
      <div className="container">
        <div className="cloud-hero-grid">
          {/* Left Hero Column */}
          <motion.div 
            className="hero-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="cloud-hero-title">Image Converter</h2>
            <p className="cloud-hero-desc">
              Image Converter converts your image files online. Amongst many others, we support PNG, JPG, GIF, WEBP, HEIC, and BMP. You can use the options below to control image resolution, quality and file size.
            </p>
          </motion.div>

          {/* Right Visual Target Box */}
          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="converter-visual-box">
              <div className="format-visual-card">
                <div className="card-file-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <span className="card-format-text">ANY</span>
                <span className="card-subtext">INPUT</span>
              </div>

              <div className="converter-arrow-ring">
                <motion.div 
                  className="arrow-circle"
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/>
                  </svg>
                </motion.div>
                <span className="arrow-label">TO</span>
              </div>

              <div className="format-visual-card active-target">
                <div className="card-file-icon target-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <span className="card-format-text target-text">{targetUpper}</span>
                <span className="card-subtext">OUTPUT</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

