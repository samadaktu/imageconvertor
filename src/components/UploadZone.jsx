import React, { useState, useRef } from 'react';

function UploadZone({ onFilesAdded, disabled, fileCount, maxFiles }) {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setIsDragActive(true);
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    
    if (disabled) return;

    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
      if (droppedFiles.length > 0) {
        onFilesAdded(droppedFiles);
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files).filter(file => file.type.startsWith('image/'));
      if (selectedFiles.length > 0) {
        onFilesAdded(selectedFiles);
      }
      e.target.value = '';
    }
  };

  const handleClickBox = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section className="floating-upload-section">
      <div 
        onClick={handleClickBox}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`cloud-upload-card ${isDragActive ? 'drag-active' : ''} ${disabled ? 'disabled' : ''}`}
      >
        <input 
          ref={fileInputRef}
          type="file" 
          accept="image/*"
          multiple
          disabled={disabled}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        
        <div className="upload-card-inner">
          <div className="cloud-red-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
            </svg>
          </div>

          <h3 className="upload-main-heading">
            {isDragActive ? 'Drop your files now...' : 'Select your file here to get started'}
          </h3>
          <p className="upload-sub-text">
            or drag & drop your files here · Ctrl+V to paste
          </p>

          <button 
            type="button" 
            className="btn-cloud-red"
            disabled={disabled}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            Select File
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '6px' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <p className="upload-limit-foot">
            {fileCount > 0 ? `${fileCount}/${maxFiles} files selected · ` : ''}
            Max {maxFiles} images at once · Up to 100MB per file
          </p>
        </div>
      </div>
    </section>
  );
}

export default UploadZone;


