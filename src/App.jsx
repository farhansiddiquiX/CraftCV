import React, { useRef, useState, useEffect } from 'react';
import ResumeForm from './components/ResumeForm/ResumeForm';
import TemplateSelector from './components/TemplateSelector/TemplateSelector';
import ResumePreview from './components/ResumePreview/ResumePreview';
import DownloadButton from './components/DownloadButton/DownloadButton';
import ColorPicker from './components/ColorPicker/ColorPicker';
import { themes } from './themes';
import './App.css';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import Footer from './components/Footer/Footer';
import ResumeLanding from './components/ResumeLanding/ResumeLanding';

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    photoUrl: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    experiences: [],
    education: [],
    strengths: '',
    projects: [],
    achievements: []
  });

  const [templateId, setTemplateId] = useState('classic');
  const [themeId, setThemeId] = useState(themes[0].id); // e.g. 'blue'
  const [customColor, setCustomColor] = useState('#000000');

  const formRef = useRef(null);
  const previewRef = useRef(null);

  const scrollWithOffset = (element, offset = 80) => {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  };

  const next = () => {
    setStep(2);
    setTimeout(() => {
      if (previewRef.current) scrollWithOffset(previewRef.current);
    }, 0);
  };

  const back = () => {
    setStep(1);
    setTimeout(() => {
      if (formRef.current) scrollWithOffset(formRef.current);
    }, 0);
  };

  const hasMounted = useRef(false);


  const handleThemeSelect = (idOrColor) => {
    const theme = themes.find(t => t.id === idOrColor);

    if (theme?.isCustom) {
      setThemeId('custom');
    } else {
      setThemeId(idOrColor);
    }
  };

  const themeColor =
    themeId === 'custom'
      ? customColor
      : themes.find(t => t.id === themeId)?.color || themes[0].color;

  return (
    <>
      <Header />
      <ResumeLanding />
      <div className="app-container">
        {step === 1 && (
          <div ref={formRef} className="form-wrapper">
            <ResumeForm data={formData} onDataChange={setFormData} />
            <div className="nav-buttons single">
              <button onClick={next} disabled={!formData.name}>
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div ref={previewRef} className="form-wrapper">
            <TemplateSelector selected={templateId} onSelect={setTemplateId} />
            <ColorPicker
              selected={themeId}
              onSelect={handleThemeSelect}
              onCustomColorChange={setCustomColor}
              customColor={customColor}
            />
            <ResumePreview
              data={formData}
              selectedTemplate={templateId}
              themeColor={themeColor}
            />
            <DownloadButton data={formData} templateId={templateId} />
            <div className="nav-buttons dual">
              <button onClick={back}>Back</button>
            </div>
          </div>
        )}
      </div>
      <Promo />
      <Footer />
    </>
  );
}
