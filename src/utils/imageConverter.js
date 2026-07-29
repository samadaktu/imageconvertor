/**
 * Convert an image file to a specified format
 * @param {File} file - The image file to convert
 * @param {Object} options - Conversion options
 * @returns {Promise<{blob: Blob, size: number, width: number, height: number, originalWidth: number, originalHeight: number}>}
 */
export async function convertImage(file, options = {}) {
  const {
    quality = 0.9,
    maxWidthOrHeight = undefined,
    targetFormat = 'image/webp'
  } = options;

  try {
    // Create an image element to load the file
    const img = await createImageElement(file);
    
    // Create a canvas to draw and convert the image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Get original dimensions
    const origWidth = img.naturalWidth || img.width;
    const origHeight = img.naturalHeight || img.height;
    
    let width = origWidth;
    let height = origHeight;
    
    // Resize if max dimension is specified
    if (maxWidthOrHeight && maxWidthOrHeight > 0) {
      const maxDim = Number(maxWidthOrHeight);
      if (width > maxDim || height > maxDim) {
        const scale = Math.min(maxDim / width, maxDim / height);
        width = Math.round(width * scale);
        height = Math.round(height * scale);
      }
    }
    
    canvas.width = width;
    canvas.height = height;
    
    // Enable high quality image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    // If target format does not support transparency, fill white background
    if (targetFormat === 'image/jpeg' || targetFormat === 'image/bmp') {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);
    }

    ctx.drawImage(img, 0, 0, width, height);
    
    // Convert to target format blob
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve({
              blob,
              size: blob.size,
              width,
              height,
              originalWidth: origWidth,
              originalHeight: origHeight
            });
          } else {
            reject(new Error(`Failed to convert image to ${targetFormat}`));
          }
        },
        targetFormat,
        quality
      );
    });
  } catch (error) {
    console.error('Error converting image:', error);
    throw error;
  }
}

/**
 * Create an image element from a file
 * @param {File} file 
 * @returns {Promise<HTMLImageElement>}
 */
function createImageElement(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };
    
    img.src = url;
  });
}

