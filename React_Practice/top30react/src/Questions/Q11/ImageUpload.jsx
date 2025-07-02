import React, { useState } from 'react';

const ImageUploader = () => {
  const [imageFile, setImageFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
      setImageFile(file);
      setPreviewURL(URL.createObjectURL(file));
    } else {
      alert('Please select a valid image file (JPG, PNG, etc.)');
      setImageFile(null);
      setPreviewURL(null);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!imageFile) {
      alert('Please upload an image first');
      return;
    }

    // Simulating upload
    const formData = new FormData();
    formData.append('image', imageFile);
    console.log('Image ready to be uploaded:', imageFile);

    // TODO: Upload via fetch/axios if needed
    // fetch('/upload', {
    //   method: 'POST',
    //   body: formData,
    // });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>🖼️ Image Uploader</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <br /><br />

        {previewURL && (
          <img
            src={previewURL}
            alt="Preview"
            style={{ width: '250px', height: 'auto', border: '2px solid #aaa', borderRadius: '8px' }}
          />
        )}
        <br /><br />

        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default ImageUploader;
