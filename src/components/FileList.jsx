import React from 'react';
import FileCard from './FileCard';
import { formatFileSize } from '../utils/helpers';

function FileList({ files, onRemove, onDownload, onPreview, viewMode, setViewMode }) {
  if (files.length === 0) {
    return null;
  }

  return (
    <section className="file-list-section">
      <div className="file-list-header">
        <div className="file-count-badge">
          <h3>Uploaded Images</h3>
          <span className="count-pill">{files.length} / 100</span>
        </div>

        <div className="view-mode-toggle">
          <button 
            className={`btn-view-toggle ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            title="Grid View"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
            Grid
          </button>
          <button 
            className={`btn-view-toggle ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => setViewMode('table')}
            title="Compact Table View"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
            List ({files.length})
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="file-grid">
          {files.map(file => (
            <FileCard
              key={file.id}
              file={file}
              onRemove={() => onRemove(file.id)}
              onDownload={() => onDownload(file.id)}
              onPreview={() => onPreview(file)}
            />
          ))}
        </div>
      ) : (
        <div className="file-table-container glass">
          <table className="file-table">
            <thead>
              <tr>
                <th style={{ width: '60px' }}>Thumbnail</th>
                <th>File Name</th>
                <th>Original Size</th>
                <th>Status</th>
                <th>Converted Size</th>
                <th>Savings</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id} className="table-row">
                  <td className="td-thumb" onClick={() => onPreview(file)}>
                    <img src={file.preview} alt={file.name} className="table-img-preview" />
                  </td>
                  <td className="td-name" title={file.name}>
                    <span className="file-name-text" onClick={() => onPreview(file)}>{file.name}</span>
                  </td>
                  <td className="td-size">{formatFileSize(file.originalSize)}</td>
                  <td className="td-status">
                    <span className={`table-badge status-${file.status}`}>
                      {file.status === 'converting' ? 'Converting...' : file.status === 'success' ? 'Converted' : file.status === 'pending' ? 'Ready' : 'Failed'}
                    </span>
                  </td>
                  <td className="td-converted-size">
                    {file.convertedSize ? formatFileSize(file.convertedSize) : '—'}
                  </td>
                  <td className="td-savings">
                    {file.compressionRatio ? (
                      <span className={`savings-pill ${Number(file.compressionRatio) < 0 ? 'increased' : ''}`}>
                        {Number(file.compressionRatio) >= 0 ? `-${file.compressionRatio}%` : `+${Math.abs(file.compressionRatio)}%`}
                      </span>
                    ) : '—'}
                  </td>
                  <td className="td-actions">
                    <div className="row-actions">
                      <button className="btn-icon-sm" onClick={() => onPreview(file)} title="Preview & Compare">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>

                      {file.status === 'success' && (
                        <button className="btn-icon-sm btn-success-sm" onClick={() => onDownload(file.id)} title="Download File">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                        </button>
                      )}

                      <button className="btn-icon-sm btn-remove-sm" onClick={() => onRemove(file.id)} title="Remove">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default FileList;

