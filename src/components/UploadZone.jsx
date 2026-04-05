import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function UploadZone({ onFilesAdded, disabled, fileCount, maxFiles }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onFilesAdded(acceptedFiles);
    }
  }, [onFilesAdded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.gif']
    },
    multiple: true,
    disabled,
    maxFiles: maxFiles - fileCount
  });

  return (
    <section className="upload-zone">
      <div 
        {...getRootProps()} 
        className={`upload-box glass ${isDragActive ? 'drag-active' : ''} ${disabled ? 'disabled' : ''}`}
      >
        <input {...getInputProps()} />
        
        <div className="upload-content">
          <div className="upload-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
          
          {isDragActive ? (
            <p className="upload-title">Drop your images here...</p>
          ) : (
            <>
              <p className="upload-title">Drag & Drop Images Here</p>
              <p className="upload-subtitle">or</p>
              <button className="btn btn-primary" type="button" disabled={disabled}>
                Choose Files
              </button>
              <p className="upload-info">
                {fileCount > 0 ? `${fileCount}/${maxFiles} images selected · ` : ''}
                Max {maxFiles} images · 100MB per file
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default UploadZone;
