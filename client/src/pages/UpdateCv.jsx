// src/pages/UpdateCv.jsx
import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import './UpdateCv.css';

const UpdateCv = () => {
  const [cvFile, setCvFile] = useState(null);

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!cvFile) {
      alert('Please select a CV file first.');
      return;
    }

    // TODO: Upload to backend
    console.log('Uploading:', cvFile);
    alert(`CV "${cvFile.name}" uploaded successfully!`);
    setCvFile(null);
  };

  return (
    <AdminLayout>
      <div className="update-cv">
        <h1 className="cv-title">Update CV</h1>

        <form className="cv-form" onSubmit={handleUpload}>
          <label htmlFor="cv-upload" className="cv-dropzone">
            {cvFile ? (
              <span>{cvFile.name}</span>
            ) : (
              <>
                <p>Click to select or drag your CV here</p>
                <small>(PDF, DOC, DOCX)</small>
              </>
            )}
            <input
              id="cv-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </label>

          <button type="submit" className="upload-btn">
            Upload CV
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default UpdateCv;
