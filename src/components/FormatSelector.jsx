import React from 'react';

function FormatSelector({ 
  targetFormat, 
  setTargetFormat, 
  quality, 
  setQuality, 
  maxDimension, 
  setMaxDimension 
}) {
  return (
    <section className="format-selector-wrapper">
      <div className="format-selector glass">
        <div className="format-box">
          <span className="format-label">Input Format</span>
          <strong className="format-value-static">ANY IMAGE</strong>
        </div>
        
        <div className="format-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
        
        <div className="format-box">
          <span className="format-label">Output Format</span>
          <select 
            className="format-select" 
            value={targetFormat} 
            onChange={(e) => setTargetFormat(e.target.value)}
            aria-label="Select Target Format"
          >
            <option value="webp">WEBP (Modern & Compact)</option>
            <option value="jpeg">JPEG (Universal Photo)</option>
            <option value="png">PNG (Lossless / Transparent)</option>
            <option value="bmp">BMP (Uncompressed Bitmap)</option>
          </select>
        </div>
      </div>

      <div className="options-panel glass">
        <div className="option-item">
          <div className="option-header">
            <label htmlFor="quality-range" className="option-label">
              Quality: <span className="option-value-badge">{Math.round(quality * 100)}%</span>
            </label>
            {targetFormat === 'png' && (
              <span className="option-hint">(Lossless Format)</span>
            )}
          </div>
          <input 
            id="quality-range"
            type="range" 
            min="10" 
            max="100" 
            value={Math.round(quality * 100)} 
            onChange={(e) => setQuality(Number(e.target.value) / 100)}
            className="quality-slider"
          />
        </div>

        <div className="option-item">
          <label htmlFor="dimension-select" className="option-label">Max Dimension</label>
          <select
            id="dimension-select"
            className="option-select"
            value={maxDimension}
            onChange={(e) => setMaxDimension(e.target.value)}
          >
            <option value="original">Original Size (No Scaling)</option>
            <option value="3840">3840px (4K Ultra HD)</option>
            <option value="1920">1920px (Full HD)</option>
            <option value="1280">1280px (HD Ready)</option>
            <option value="800">800px (Web Optimized)</option>
            <option value="500">500px (Thumbnail)</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default FormatSelector;

