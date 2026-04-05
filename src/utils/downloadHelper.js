import JSZip from 'jszip';

/**
 * Download a single file
 * @param {Blob} blob - The file blob to download
 * @param {string} filename - The filename to save as
 */
export function downloadFile(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Download multiple files as a ZIP archive
 * @param {Array} files - Array of file objects with name and convertedBlob
 */
export async function downloadAllAsZip(files) {
  try {
    const zip = new JSZip();
    
    // Add each file to the ZIP
    files.forEach((file, index) => {
      const newName = file.name.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      zip.file(newName, file.convertedBlob);
    });
    
    // Generate the ZIP file
    const zipBlob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 6
      }
    });
    
    // Download the ZIP
    const timestamp = new Date().toISOString().split('T')[0];
    downloadFile(zipBlob, `converted-images-${timestamp}.zip`);
  } catch (error) {
    console.error('Error creating ZIP:', error);
    throw error;
  }
}

/**
 * Trigger download for multiple files individually
 * @param {Array} files - Array of file objects
 */
export function downloadMultipleFiles(files) {
  files.forEach((file, index) => {
    setTimeout(() => {
      const newName = file.name.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      downloadFile(file.convertedBlob, newName);
    }, index * 100); // Stagger downloads to avoid browser blocking
  });
}
