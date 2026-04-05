import React from 'react';
import FileCard from './FileCard';

function FileList({ files, onRemove, onDownload }) {
  if (files.length === 0) {
    return null;
  }

  return (
    <section className="file-list">
      <div className="file-list-header">
        <h3>Files ({files.length})</h3>
      </div>
      <div className="file-grid">
        {files.map(file => (
          <FileCard
            key={file.id}
            file={file}
            onRemove={() => onRemove(file.id)}
            onDownload={() => onDownload(file.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default FileList;
