import React from 'react';
import { motion } from 'framer-motion';

const FORMATS = [
  'AVIF', 'BMP', 'CR2', 'CR3', 'DNG', 'EPS', 'GIF', 
  'HEIC', 'HEIF', 'ICO', 'JPEG', 'JPG', 'NEF', 'PNG', 
  'PPM', 'PSD', 'RAW', 'SVG', 'TIF', 'TIFF', 'WEBP'
];

function AvailableConverters({ onSelectFormat, activeFormat }) {
  return (
    <section className="available-converters-section">
      <div className="container">
        <div className="available-converters-card glass">
          <div className="section-header">
            <span className="section-caption">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
              </svg>
              AVAILABLE CONVERTERS
            </span>
            <h3 className="section-title">Image converters</h3>
            <p className="section-subtitle">
              Browse every image format supported by our client-side processing engine — select any format to switch instantly.
            </p>
          </div>

          <motion.div 
            className="format-matrix"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.03 } }
            }}
          >
            {FORMATS.map((fmt) => {
              const isSelected = activeFormat?.toLowerCase() === fmt.toLowerCase();
              return (
                <motion.button
                  key={fmt}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`matrix-pill ${isSelected ? 'active' : ''}`}
                  onClick={() => onSelectFormat(fmt.toLowerCase())}
                >
                  {fmt}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AvailableConverters;
