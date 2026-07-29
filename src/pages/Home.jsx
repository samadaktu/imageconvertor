import React, { useState, useCallback, useEffect } from 'react';
import Hero from '../components/Hero';
import UploadZone from '../components/UploadZone';
import FormatSelector from '../components/FormatSelector';
import FileList from '../components/FileList';
import ActionButtons from '../components/ActionButtons';
import AvailableConverters from '../components/AvailableConverters';
import InfoSection from '../components/InfoSection';
import Toast from '../components/Toast';
import ImagePreviewModal from '../components/ImagePreviewModal';
import { convertImage } from '../utils/imageConverter';
import { downloadFile, downloadAllAsZip } from '../utils/downloadHelper';

const MAX_FILES = 100;
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

function Home() {
  const [files, setFiles] = useState([]);
  const [targetFormat, setTargetFormat] = useState('webp');
  const [quality, setQuality] = useState(0.9);
  const [maxDimension, setMaxDimension] = useState('original');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [previewFile, setPreviewFile] = useState(null);
  const [progress, setProgress] = useState(null);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3500);
  }, []);

  const handleFilesAdded = useCallback((newFiles) => {
    if (files.length + newFiles.length > MAX_FILES) {
      showToast(`Maximum ${MAX_FILES} files allowed at once`, 'error');
      return;
    }

    const validFiles = [];
    const errors = [];

    newFiles.forEach(file => {
      const isValidType = file.type.startsWith('image/');
      const isValidSize = file.size <= MAX_FILE_SIZE;

      if (!isValidType) {
        errors.push(`${file.name}: Invalid format (only image files allowed)`);
      } else if (!isValidSize) {
        errors.push(`${file.name}: File too large (max 100MB)`);
      } else {
        validFiles.push({
          id: `${Date.now()}-${Math.random()}`,
          file,
          name: file.name,
          size: file.size,
          status: 'pending',
          preview: URL.createObjectURL(file),
          convertedBlob: null,
          convertedName: null,
          originalSize: file.size,
          convertedSize: null,
          compressionRatio: null,
          targetFormat: null,
          originalWidth: null,
          originalHeight: null,
          convertedWidth: null,
          convertedHeight: null
        });
      }
    });

    if (errors.length > 0) {
      showToast(errors[0], 'error');
    }

    if (validFiles.length > 0) {
      setFiles(prev => {
        const updated = [...prev, ...validFiles];
        if (updated.length > 6 && viewMode === 'grid') {
          setViewMode('table');
        }
        return updated;
      });
      showToast(`${validFiles.length} file(s) added successfully`, 'success');
    }
  }, [files.length, viewMode, showToast]);

  useEffect(() => {
    const handlePaste = (e) => {
      if (e.clipboardData && e.clipboardData.files && e.clipboardData.files.length > 0) {
        const pastedFiles = Array.from(e.clipboardData.files).filter(f => f.type.startsWith('image/'));
        if (pastedFiles.length > 0) {
          handleFilesAdded(pastedFiles);
          showToast('Image pasted from clipboard', 'success');
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [handleFilesAdded, showToast]);

  const handleRemoveFile = useCallback((fileId) => {
    setFiles(prev => {
      const file = prev.find(f => f.id === fileId);
      if (file?.preview) {
        URL.revokeObjectURL(file.preview);
      }
      return prev.filter(f => f.id !== fileId);
    });
    if (previewFile?.id === fileId) {
      setPreviewFile(null);
    }
  }, [previewFile]);

  const handleClearAll = useCallback(() => {
    files.forEach(file => {
      if (file.preview) {
        URL.revokeObjectURL(file.preview);
      }
    });
    setFiles([]);
    setPreviewFile(null);
    showToast('All files cleared', 'success');
  }, [files, showToast]);

  const handleConvert = useCallback(async () => {
    const pendingFiles = files.filter(f => f.status === 'pending' || f.status === 'error');
    
    if (pendingFiles.length === 0) {
      showToast('No files pending conversion', 'error');
      return;
    }

    showToast(`Converting ${pendingFiles.length} images...`, 'success');
    setProgress({ current: 0, total: pendingFiles.length });

    const ext = targetFormat === 'jpeg' ? 'jpg' : targetFormat;
    let completedCount = 0;

    for (const fileData of pendingFiles) {
      setFiles(prev => prev.map(f => 
        f.id === fileData.id ? { ...f, status: 'converting' } : f
      ));

      try {
        const maxDim = maxDimension === 'original' ? undefined : Number(maxDimension);
        const result = await convertImage(fileData.file, { 
          quality, 
          maxWidthOrHeight: maxDim,
          targetFormat: `image/${targetFormat}` 
        });
        
        const convertedName = fileData.name.replace(/\.[^/.]+$/, `.${ext}`);
        const savedRatio = ((1 - result.size / fileData.originalSize) * 100).toFixed(1);

        setFiles(prev => prev.map(f => 
          f.id === fileData.id ? {
            ...f,
            status: 'success',
            convertedBlob: result.blob,
            convertedName,
            convertedSize: result.size,
            targetFormat,
            compressionRatio: savedRatio,
            originalWidth: result.originalWidth,
            originalHeight: result.originalHeight,
            convertedWidth: result.width,
            convertedHeight: result.height
          } : f
        ));
      } catch (error) {
        console.error('Conversion error:', error);
        setFiles(prev => prev.map(f => 
          f.id === fileData.id ? { ...f, status: 'error' } : f
        ));
      }

      completedCount += 1;
      setProgress({ current: completedCount, total: pendingFiles.length });
    }

    setProgress(null);
    showToast('Batch conversion finished successfully!', 'success');
  }, [files, showToast, targetFormat, quality, maxDimension]);

  const handleDownload = useCallback((fileId) => {
    const file = files.find(f => f.id === fileId);
    if (file?.convertedBlob) {
      const ext = targetFormat === 'jpeg' ? 'jpg' : targetFormat;
      const downloadName = file.convertedName || file.name.replace(/\.[^/.]+$/, `.${ext}`);
      downloadFile(file.convertedBlob, downloadName);
      showToast('Download started', 'success');
    }
  }, [files, showToast, targetFormat]);

  const handleDownloadAll = useCallback(async () => {
    const convertedFiles = files.filter(f => f.status === 'success' && f.convertedBlob);
    
    if (convertedFiles.length === 0) {
      showToast('No converted files to download', 'error');
      return;
    }

    try {
      showToast('Preparing ZIP archive...', 'success');
      await downloadAllAsZip(convertedFiles);
      showToast('Download started', 'success');
    } catch (error) {
      showToast('Failed to create ZIP file', 'error');
    }
  }, [files, showToast]);

  const convertedFiles = files.filter(f => f.status === 'success' && f.convertedSize);
  const totalOrigSize = convertedFiles.reduce((acc, f) => acc + f.originalSize, 0);
  const totalConvSize = convertedFiles.reduce((acc, f) => acc + f.convertedSize, 0);
  const totalSavedBytes = totalOrigSize - totalConvSize;
  const totalSavedRatio = totalOrigSize > 0 ? ((totalSavedBytes / totalOrigSize) * 100).toFixed(1) : 0;

  return (
    <>
      <Hero targetFormat={targetFormat} onSelectFormat={setTargetFormat} />
      
      <main className="main-content">
        <div className="container">
          <UploadZone 
            onFilesAdded={handleFilesAdded}
            disabled={files.length >= MAX_FILES}
            fileCount={files.length}
            maxFiles={MAX_FILES}
          />
          
          <FormatSelector 
            targetFormat={targetFormat} 
            setTargetFormat={setTargetFormat} 
            quality={quality}
            setQuality={setQuality}
            maxDimension={maxDimension}
            setMaxDimension={setMaxDimension}
          />
          
          <FileList 
            files={files}
            onRemove={handleRemoveFile}
            onDownload={handleDownload}
            onPreview={setPreviewFile}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
          
          {files.length > 0 && (
            <ActionButtons
              onClearAll={handleClearAll}
              onConvert={handleConvert}
              onDownloadAll={handleDownloadAll}
              hasFiles={files.length > 0}
              hasConvertedFiles={files.some(f => f.status === 'success')}
              isConverting={files.some(f => f.status === 'converting')}
              targetFormat={targetFormat}
              progress={progress}
              totalSavedBytes={totalSavedBytes}
              totalSavedRatio={totalSavedRatio}
              convertedCount={convertedFiles.length}
            />
          )}
        </div>
      </main>

      <AvailableConverters activeFormat={targetFormat} onSelectFormat={setTargetFormat} />

      <InfoSection />
      
      {previewFile && (
        <ImagePreviewModal
          file={files.find(f => f.id === previewFile.id) || previewFile}
          onClose={() => setPreviewFile(null)}
          onDownload={handleDownload}
        />
      )}

      <Toast 
        show={toast.show}
        message={toast.message}
        type={toast.type}
      />
    </>
  );
}

export default Home;
