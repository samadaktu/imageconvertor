/**
 * Format file size to human readable format
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size
 */
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Validate if file is an image
 * @param {File} file 
 * @returns {boolean}
 */
export function isValidImageFile(file) {
  const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  return validTypes.includes(file.type);
}

/**
 * Validate file size
 * @param {File} file 
 * @param {number} maxSize - Maximum size in bytes
 * @returns {boolean}
 */
export function isValidFileSize(file, maxSize) {
  return file.size <= maxSize;
}

/**
 * Get file extension
 * @param {string} filename 
 * @returns {string}
 */
export function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
}

/**
 * Calculate compression ratio
 * @param {number} originalSize 
 * @param {number} compressedSize 
 * @returns {number} Percentage reduction
 */
export function calculateCompressionRatio(originalSize, compressedSize) {
  return ((1 - compressedSize / originalSize) * 100).toFixed(1);
}

/**
 * Debounce function
 * @param {Function} func 
 * @param {number} wait 
 * @returns {Function}
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
