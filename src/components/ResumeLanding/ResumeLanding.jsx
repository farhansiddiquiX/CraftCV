import React from 'react';
import './ResumeLanding.css';
import { FaFileAlt, FaPencilAlt, FaDownload } from 'react-icons/fa';
import { SiAdobe } from 'react-icons/si';

export default function ResumeLanding() {
  return (
    <div className="resume-container">
      {/* Hero Section */}
      <section className="resume-hero">
        <div className="logo-wrapper">
          <img src='/images/logo1.png' className="resume-logo" />
        </div>
        <h1>
          Free <span className="gradient-text">Resume Maker</span> - Generate your resume online.
        </h1>
        <p className="subtext">
          Easily create resumes to stand out using CraftCV, the quick and easy create-anything app.
          Choose from Multiple customizable templates to get started.
        </p>
      </section>

      {/* Steps Section */}
<section className="resume-steps">
  <h2>Build your resume in 3 easy steps</h2>
  <div className="steps-wrapper">
    <div className="step">
      <FaFileAlt className="step-icon gold" />
      <h3>Step 1</h3>
      <p>
        Fill in your personal details, education, experience, skills, and other relevant information to complete your resume.
      </p>
    </div>
    <div className="step">
      <FaPencilAlt className="step-icon silver" />
      <h3>Step 2</h3>
      <p>
        Choose a professional template, customize the look, and preview your resume in real-time before finalizing.
      </p>
    </div>
    <div className="step">
      <FaDownload className="step-icon bronze" />
      <h3>Step 3</h3>
      <p>
        Click to download your resume as a high-quality, selectable-text PDF. You’re all set to apply confidently!
      </p>
    </div>
  </div>
</section>
    </div>
  );
}
