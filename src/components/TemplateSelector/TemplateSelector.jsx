// src/components/TemplateSelector/TemplateSelector.jsx
import React from 'react';
import './TemplateSelector.css';

const templates = [
  { id: 'template1', name: 'Template 1',     thumbnail: '/images/Template1.png' },
  { id: 'template2', name: 'Template 2',      thumbnail: '/images/Template2.png'  },
  { id: 'template3', name: 'Template 3',  thumbnail: '/images/Template3.png'},
  { id: 'template4', name: 'Template 4',thumbnail: '/images/Template4.png'},
  { id: 'template5', name: 'Template 5',     thumbnail: '/images/Template5.png'},
  { id: 'template6', name: 'Template 6',      thumbnail: '/images/Template6.png'},
  { id: 'template7', name: 'Template 7',thumbnail: '/images/Template7.png'},
  { id: 'template8', name: 'Template 8',  thumbnail: '/images/Template8.png'},
  { id: 'template9', name: 'Template 9',  thumbnail: '/images/Template9.png'},
];

export default function TemplateSelector({ selected, onSelect }) {
  return (
    <div className="template-selector">
      <h3>Choose a Template</h3>
      <div className="template-list">
        {templates.map(t => (
          <div
            key={t.id}
            className={`template-card ${selected === t.id ? 'active' : ''}`}
            onClick={() => onSelect(t.id)}
          >
            <img src={t.thumbnail} alt={t.name} />
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
