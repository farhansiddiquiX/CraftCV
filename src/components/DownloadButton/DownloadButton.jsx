// src/components/DownloadButton/DownloadButton.jsx
import React from 'react';
import './DownloadButton.css';

function imageToBase64(imgElement) {
  const canvas = document.createElement('canvas');
  canvas.width = imgElement.naturalWidth;
  canvas.height = imgElement.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imgElement, 0, 0);
  return canvas.toDataURL('image/png');
}

export default function DownloadButton() {
  const handleDownload = async () => {
    console.log('Clicked Download Button');

    const resumeElement = document.getElementById('resume-preview');
    const clonedElement = resumeElement.cloneNode(true);

    const img = clonedElement.querySelector('img');
    if (img) {
      const originalImg = resumeElement.querySelector('img');
      if (originalImg && originalImg.complete) {
        const base64 = imageToBase64(originalImg);
        img.setAttribute('src', base64);
      }
    }

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Resume</title>
          <style>${getAllStyles()}</style>
        </head>
        <body>${clonedElement.outerHTML}</body>
      </html>
    `;

    const response = await fetch('http://localhost:5000/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ html }),
    });

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'resume.pdf';
    link.click();
  };

  const getAllStyles = () => {
    let styles = '';
    for (let sheet of document.styleSheets) {
      try {
        for (let rule of sheet.cssRules) {
          styles += rule.cssText;
        }
      } catch (e) {
        // Ignore CORS errors
      }
    }
    return styles;
  };

  return (
    <button className="merge-btn" onClick={handleDownload}>
      Download Resume as PDF
    </button>
  );
}
