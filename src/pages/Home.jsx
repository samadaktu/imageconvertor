import React, { useState, useCallback } from 'react';
import Hero from '../components/Hero';
import UploadZone from '../components/UploadZone';
import FormatSelector from '../components/FormatSelector';
import FileList from '../components/FileList';
import ActionButtons from '../components/ActionButtons';
import InfoSection from '../components/InfoSection';
import Toast from '../components/Toast';
import { convertImage } from '../utils/imageConverter';
import { downloadFile, downloadAllAsZip } from '../utils/downloadHelper';

const MAX_FILES = 20;
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

function Home() {
  const [files, setFiles] = useState([]);
  const [targetFormat, setTargetFormat] = useState('webp');
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = useCallback((message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  }, []);

  const handleFilesAdded = useCallback((newFiles) => {
    // Validate file count
    if (files.length + newFiles.length > MAX_FILES) {
      showToast(`Maximum ${MAX_FILES} files allowed`, 'error');
      return;
    }

    // Validate file types and sizes
    const validFiles = [];
    const errors = [];

    newFiles.forEach(file => {
      const isValidType = file.type.startsWith('image/');
      const isValidSize = file.size <= MAX_FILE_SIZE;

      if (!isValidType) {
        errors.push(`${file.name}: Invalid format (only images allowd)`);
      } else if (!isValidSize) {
        errors.push(`${file.name}: File too large (max 100MB)`);
      } else {
        validFiles.push({
          id: `${Date.now()}-${Math.random()}`,
          file,
          name: file.name,
          size: file.size,
          status: 'pending', // pending, converting, success, error
          preview: URL.createObjectURL(file),
          convertedBlob: null,
          originalSize: file.size,
          convertedSize: null,
          compressionRatio: null
        });
      }
    });

    if (errors.length > 0) {
      showToast(errors[0], 'error');
    }

    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
      showToast(`${validFiles.length} file(s) added successfully`, 'success');
    }
  }, [files.length, showToast]);

  const handleRemoveFile = useCallback((fileId) => {
    setFiles(prev => {
      const file = prev.find(f => f.id === fileId);
      if (file?.preview) {
        URL.revokeObjectURL(file.preview);
      }
      return prev.filter(f => f.id !== fileId);
    });
  }, []);

  const handleClearAll = useCallback(() => {
    files.forEach(file => {
      if (file.preview) {
        URL.revokeObjectURL(file.preview);
      }
    });
    setFiles([]);
    showToast('All files cleared', 'success');
  }, [files, showToast]);

  const handleConvert = useCallback(async () => {
    const pendingFiles = files.filter(f => f.status === 'pending');
    
    if (pendingFiles.length === 0) {
      showToast('No files to convert', 'error');
      return;
    }

    showToast('Starting conversion...', 'success');

    // Convert files one by one with status updates
    for (const fileData of pendingFiles) {
      // Update status to converting
      setFiles(prev => prev.map(f => 
        f.id === fileData.id ? { ...f, status: 'converting' } : f
      ));

      try {
        const result = await convertImage(fileData.file, { 
          quality: 0.9, 
          targetFormat: `image/${targetFormat}` 
        });
        
        // Update with success
        setFiles(prev => prev.map(f => 
          f.id === fileData.id ? {
            ...f,
            status: 'success',
            convertedBlob: result.blob,
            convertedSize: result.size,
            compressionRatio: ((1 - result.size / f.originalSize) * 100).toFixed(1)
          } : f
        ));
      } catch (error) {
        console.error('Conversion error:', error);
        setFiles(prev => prev.map(f => 
          f.id === fileData.id ? { ...f, status: 'error' } : f
        ));
      }
    }

    showToast('Conversion complete!', 'success');
  }, [files, showToast, targetFormat]);

  const handleDownload = useCallback((fileId) => {
    const file = files.find(f => f.id === fileId);
    if (file?.convertedBlob) {
      const extension = targetFormat === 'jpeg' ? 'jpg' : targetFormat;
      const newName = file.name.replace(/\.[^/.]+$/, `.${extension}`);
      downloadFile(file.convertedBlob, newName);
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
      showToast('Creating ZIP file...', 'success');
      await downloadAllAsZip(convertedFiles);
      showToast('Download started', 'success');
    } catch (error) {
      showToast('Failed to create ZIP file', 'error');
    }
  }, [files, showToast]);

  return (
    <>
      <Hero />
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
          />
          
          <FileList 
            files={files}
            onRemove={handleRemoveFile}
            onDownload={handleDownload}
          />
          
          {files.length > 0 && (
            <ActionButtons
              onClearAll={handleClearAll}
              onConvert={handleConvert}
              onDownloadAll={handleDownloadAll}
              hasFiles={files.length > 0}
              hasConvertedFiles={files.some(f => f.status === 'success')}
              isConverting={files.some(f => f.status === 'converting')}
            />
          )}
        </div>
      </main>
      <InfoSection />
      <Toast 
        show={toast.show}
        message={toast.message}
        type={toast.type}
      />
    </>
  );
}

export default Home;
