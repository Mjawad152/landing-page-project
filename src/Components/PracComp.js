// PracComp.jsx

import React, { useState, useEffect } from 'react';
import { uploadImage, getImageUrl } from '../Services/api';

const PracComp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = await getImageUrl();
        console.log('Image URL:', url); // Log the URL for debugging
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image:', error.message);
      }
    };
  
    fetchImage();
  }, []);
  

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const uploadedImageUrl = await uploadImage(formData);
      setImageUrl(uploadedImageUrl);
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };

  return (
    <div encType="multipart/form-data">
      <h2>Image Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>

     {imageUrl && (
  <div>
    <h3>Uploaded Image:</h3>
    <img src={`${imageUrl}`} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '400px' }} />
  </div>
)}

    </div>
  );
};

export default PracComp;
