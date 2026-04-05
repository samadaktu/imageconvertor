import React from 'react';
import { formatFileSize } from '../utils/helpers';

function FileCard({ file, onRemove, onDownload }) {
  const getStatusIcon = () => {
    switch (file.status) {
      case 'pending':
        return (
          <div className="status-badge status-pending">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span>Ready</span>
          </div>
        );
      case 'converting':
        return (
          <div className="status-badge status-converting">
            <div className="spinner"></div>
            <span>Converting...</span>
          </div>
        );
      case 'success':
        return (
          <div className="status-badge status-success">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Converted</span>
          </div>
        );
      case 'error':
        return (
          <div className="status-badge status-error">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            <span>Failed</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="file-card">
      <div className="file-preview">
        <img src={file.preview} alt={file.name} />
        {getStatusIcon()}
      </div>
      
      <div className="file-info">
        <p className="file-name" title={file.name}>{file.name}</p>
        <div className="file-meta">
          <span className="file-size">{formatFileSize(file.originalSize)}</span>
          {file.status === 'success' && file.compressionRatio && (
            <span className="compression-ratio">
              -{file.compressionRatio}%
            </span>
          )}
        </div>
      </div>
      
      <div className="file-actions">
        {file.status === 'success' && (
          <button 
            className="btn-icon btn-download" 
            onClick={onDownload}
            title="Download"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
        )}
        
        {file.status !== 'converting' && (
          <button 
            className="btn-icon btn-remove" 
            onClick={onRemove}
            title="Remove"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default FileCard;
