import React from 'react';
import './Promo.css';
import { RiFilePdfLine, RiLinksLine, RiDownloadCloud2Line } from 'react-icons/ri';

const Promo = () => {
  return (
    <>
      <div className='ad-cont'>
        <div className='ad-text'>
          <h1>CraftCV: <br />Build Resumes That Stand Out</h1>
          <p>
            Design your perfect resume in minutes.<br />
            Professional templates, guided sections, and instant PDF downloads — all in one place.
          </p>
        </div>
        <div className='ad-img'>
          <img src='/images/ad.png' alt="CraftCV Preview" />
        </div>
      </div>

      <div className="usecases-cont">
        <h2>Why use CraftCV?</h2>
        <div className="usecases-cards">
          <div className="usecase-card">
            <RiFilePdfLine size={30} className="usecase-icon" />
            <h3>Easy Resume Builder</h3>
            <p>Fill in your details using our step-by-step form. No formatting hassle.</p>
          </div>
          <div className="usecase-card">
            <RiLinksLine size={30} className="usecase-icon" />
            <h3>Preview Instantly</h3>
            <p>Choose from multiple templates and see your resume update in real-time.</p>
          </div>
          <div className="usecase-card">
            <RiDownloadCloud2Line size={30} className="usecase-icon" />
            <h3>One-Click Download</h3>
            <p>Download your professional resume as a high-quality PDF instantly.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Promo;
