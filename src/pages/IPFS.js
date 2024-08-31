// src/pages/IPFS.js
import React, { useState } from 'react';
import { uploadFile } from '../services/ipfsservice';


const IPFS = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      const url = await uploadFile(file);
      setFileUrl(url);
    } catch (error) {
      alert('Failed to upload file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>IPFS File Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file || loading}>
        {loading ? 'Uploading...' : 'Upload to IPFS'}
      </button>
      {fileUrl && (
        <div>
          <p>File uploaded successfully. You can access it at:</p>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            {fileUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default IPFS;
