import imageCompression from 'browser-image-compression';

/**
 * Convert an image file to a specified format
 * @param {File} file - The image file to convert
 * @param {Object} options - Conversion options
 * @returns {Promise<{blob: Blob, size: number, width: number, height: number}>}
 */
export async function convertImage(file, options = {}) {
  const {
    quality = 0.9,
    maxWidthOrHeight = undefined,
    targetFormat = 'image/webp' // defaults to webp, but can be 'image/jpeg', 'image/png', etc.
  } = options;

  try {
    // Create an image element to load the file
    const img = await createImageElement(file);
    
    // Create a canvas to draw and convert the image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    let width = img.width;
    let height = img.height;
    
    // Resize if needed
    if (maxWidthOrHeight) {
      const scale = Math.min(maxWidthOrHeight / width, maxWidthOrHeight / height);
      if (scale < 1) {
        width = Math.floor(width * scale);
        height = Math.floor(height * scale);
      }
    }
    
    canvas.width = width;
    canvas.height = height;
    
    // Draw the image
    // If target is jpeg, we should fill with white background first to avoid black backgrounds for transparent pixels
    if (targetFormat === 'image/jpeg') {
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
              height
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

/**
 * Alternative conversion method using browser-image-compression library
 * Retained for WebP compression specifically if needed
 */
export async function convertImageToWebPWithCompression(file, options = {}) {
  const {
    quality = 0.9,
    maxSizeMB = 10,
    maxWidthOrHeight = undefined
  } = options;

  try {
    const compressionOptions = {
      maxSizeMB,
      maxWidthOrHeight,
      useWebWorker: true,
      fileType: 'image/webp',
      initialQuality: quality
    };

    const compressedFile = await imageCompression(file, compressionOptions);
    
    return {
      blob: compressedFile,
      size: compressedFile.size
    };
  } catch (error) {
    console.error('Error with compression library:', error);
    throw error;
  }
}
