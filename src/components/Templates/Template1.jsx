// src/components/templates/Template1.jsx
import React from 'react';
import './Template1.css';

export default function Template1({ data }) {
  const {
  photoUrl, name, role, email, phone, location,
  summary, experiences = [], education = [],
  skills, projects = [], achievements = []
} = data;


  // Convert "2022-08" to "August 2022"
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? dateStr : date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="classic-container">
      <header className="classic-header">
        {photoUrl && (
          <img
            src={photoUrl}
            className="classic-photo"
            alt={`${name} profile`}
          />
        )}
        <div className="classic-header-text">
          <h1 className="classic-name">{name}</h1>
          {role && <p className="t7-role">{role}</p>}
          <p className="classic-contact">
            {email} · {phone} · {location}
          </p>
        </div>
      </header>

      {summary && (
        <section className="classic-section">
          <h2>Summary</h2>
          <p>{summary}</p>
        </section>
      )}

      {experiences.length > 0 && (
        <section className="classic-section">
          <h2>Experience</h2>
          {experiences.map((e, i) => (
            <div key={i} className="classic-entry">
              <h3>{e.role}</h3>
              <p className="classic-institution">{e.company}</p>
              <span className="classic-dates">
                {formatDate(e.start)} – {formatDate(e.end)}
              </span>
              <p>{e.description}</p>
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section className="classic-section">
          <h2>Education</h2>
          {education.map((e, i) => (
            <div key={i} className="classic-entry">
              <h3>{e.degree}</h3>
              <p className="classic-institution">{e.institution}</p>
              <span className="classic-dates">
                {formatDate(e.start)} – {formatDate(e.end)}
              </span>
              <p>{e.description}</p>
            </div>
          ))}
        </section>
      )}

      {skills && (
        <section className="classic-section">
          <h2>Skills</h2>
          <ul className="classic-skill-list">
            {skills.split(',').map((s, i) => (
              <li key={i}><strong>{s.trim()}</strong></li>
            ))}
          </ul>
        </section>
      )}

      {projects.length > 0 && (
        <section className="classic-section">
          <h2>Projects</h2>
          {projects.map((p, i) => (
            <div key={i} className="classic-entry">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </section>
      )}

      {achievements.length > 0 && (
        <section className="classic-section">
          <h2>Achievements</h2>
          {achievements.map((a, i) => (
            <div key={i} className="classic-entry">
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
