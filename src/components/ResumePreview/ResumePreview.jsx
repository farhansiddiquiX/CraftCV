import React from 'react';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';
import Template3 from '../templates/Template3';
import Template4 from '../templates/Template4';
import Template5 from '../templates/Template5';
import Template6 from '../templates/Template6';
import Template7 from '../templates/Template7';
import Template8 from '../templates/Template8';
import Template9 from '../templates/Template9';
import './ResumePreview.css';

export default function ResumePreview({ data, selectedTemplate, themeColor }) {
  const TemplateMap = {
    template1: Template1,
    template2: Template2,
    template3: Template3,
    template4: Template4,
    template5: Template5,
    template6: Template6,
    template7: Template7,
    template8: Template8,
    template9: Template9,
  };

  const Chosen = TemplateMap[selectedTemplate] || Template1;

  return (
    <>
    <div className="small-screen-note">
        Live preview available on devices wider than 1100px. You can still download the resume below.
      </div>
    <div className="resume-preview-wrapper">
  <h2 className="resume-preview-heading">Resume Preview</h2>
  <div
    id="resume-preview"
    className="resume-preview"
    style={{ '--primary-color': themeColor }}
  >
    <Chosen data={data} />
  </div>
</div>
</>
  );
}
