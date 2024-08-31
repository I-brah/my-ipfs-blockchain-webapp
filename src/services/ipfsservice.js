// src/services/ipfsService.js
import { create } from 'ipfs-http-client';

const client = create('https://ipfs.infura.io:5001/api/v0'); // Use Infura's IPFS node

const uploadFile = async (file) => {
  try {
    const added = await client.add(file);
    return `https://ipfs.infura.io/ipfs/${added.path}`;
  } catch (error) {
    console.error('Error uploading file: ', error);
    throw error;
  }
};

export { uploadFile };
