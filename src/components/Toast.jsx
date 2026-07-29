import React from 'react';

function Toast({ show, message, type = 'success' }) {
  if (!show) return null;

  const getIcon = () => {
    if (type === 'success') {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    }
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    );
  };

  return (
    <div className={`toast toast-${type} ${show ? 'toast-show' : ''}`}>
      <div className="toast-icon">
        {getIcon()}
      </div>
      <p className="toast-message">{message}</p>
    </div>
  );
}

export default Toast;
