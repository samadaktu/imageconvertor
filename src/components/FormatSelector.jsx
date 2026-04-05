import React from 'react';

function FormatSelector({ targetFormat, setTargetFormat }) {
  const handleFormatChange = (e) => {
    setTargetFormat(e.target.value);
  };

  return (
    <section className="format-selector glass">
      <div className="format-box">
        <span className="format-label">Input</span>
        <strong className="format-value">ANY IMAGE</strong>
      </div>
      
      <div className="format-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
      
      <div className="format-box">
        <span className="format-label">Output</span>
        <select 
          className="format-value" 
          value={targetFormat} 
          onChange={handleFormatChange}
          aria-label="Select Target Format"
        >
          <option value="webp">WEBP</option>
          <option value="jpeg">JPEG</option>
          <option value="png">PNG</option>
        </select>
      </div>
    </section>
  );
}

export default FormatSelector;
