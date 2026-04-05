import React from 'react';

function ActionButtons({ 
  onClearAll, 
  onConvert, 
  onDownloadAll, 
  hasFiles, 
  hasConvertedFiles,
  isConverting 
}) {
  return (
    <section className="action-buttons">
      <button 
        className="btn btn-secondary"
        onClick={onClearAll}
        disabled={!hasFiles || isConverting}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
        Clear All
      </button>
      
      {hasConvertedFiles && (
        <button 
          className="btn btn-success"
          onClick={onDownloadAll}
          disabled={isConverting}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download All
        </button>
      )}
      
      <button 
        className="btn btn-primary"
        onClick={onConvert}
        disabled={!hasFiles || isConverting}
      >
        {isConverting ? (
          <>
            <div className="spinner"></div>
            Converting...
          </>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
            Convert to WebP
          </>
        )}
      </button>
    </section>
  );
}

export default ActionButtons;
