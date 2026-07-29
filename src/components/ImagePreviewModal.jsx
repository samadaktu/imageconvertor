import React, { useEffect } from 'react';
import { formatFileSize } from '../utils/helpers';

function ImagePreviewModal({ file, onClose, onDownload }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!file) return null;

  const convertedUrl = file.convertedBlob ? URL.createObjectURL(file.convertedBlob) : null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">
            Image Comparison & Details
          </h3>
          <button className="btn-icon modal-close" onClick={onClose} title="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="compare-grid">
            {/* Original Card */}
            <div className="compare-card">
              <div className="compare-card-header">
                <span className="badge badge-original">Original</span>
                <span className="compare-size">{formatFileSize(file.originalSize)}</span>
              </div>
              <div className="compare-img-wrapper">
                <img src={file.preview} alt="Original Preview" />
              </div>
              <div className="compare-card-footer">
                <span>Format: {file.file.type || 'Image'}</span>
                {file.originalWidth && (
                  <span>Dimensions: {file.originalWidth} × {file.originalHeight} px</span>
                )}
              </div>
            </div>

            {/* Converted Card */}
            <div className="compare-card">
              <div className="compare-card-header">
                <span className="badge badge-converted">
                  {file.targetFormat ? file.targetFormat.toUpperCase() : 'Converted'}
                </span>
                {file.convertedSize ? (
                  <span className="compare-size">{formatFileSize(file.convertedSize)}</span>
                ) : (
                  <span className="compare-size-pending">Pending</span>
                )}
              </div>
              <div className="compare-img-wrapper">
                {convertedUrl ? (
                  <img src={convertedUrl} alt="Converted Preview" />
                ) : (
                  <div className="compare-placeholder">
                    <p>Not converted yet</p>
                  </div>
                )}
              </div>
              <div className="compare-card-footer">
                {file.convertedSize ? (
                  <>
                    <span className="saved-tag">
                      Saved {file.compressionRatio}%
                    </span>
                    {file.convertedWidth && (
                      <span>{file.convertedWidth} × {file.convertedHeight} px</span>
                    )}
                  </>
                ) : (
                  <span>Click &quot;Convert&quot; to process</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <span className="file-filename">{file.name}</span>
          <div className="modal-actions">
            {file.convertedBlob && (
              <button 
                className="btn btn-success" 
                onClick={() => onDownload(file.id)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download ({file.targetFormat ? file.targetFormat.toUpperCase() : 'Converted'})
              </button>
            )}
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagePreviewModal;
