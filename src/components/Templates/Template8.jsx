// src/components/templates/Template8.jsx
import React from 'react';
import './Template8.css';

export default function Template8({ data }) {
  const {
    photoUrl, name, role, email, phone, location,
    summary, experiences = [], education = [],
    skills = '', projects = [], achievements = []
  } = data;

  const formatDate = (str) => {
    const d = new Date(str);
    return isNaN(d.getTime()) ? str : d.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="t8-container">
      <aside className="t8-sidebar">
        <div className="t8-photo-wrapper">
          {photoUrl && <img src={photoUrl} alt={name} className="t8-photo" />}
        </div>

        <h1 className="t8-name">{name}</h1>
        <p className="t8-role"><i>{role}</i></p>

        <div className="t8-contact">
          <p>📞 {phone}</p>
          <p>✉️ {email}</p>
          <p>📍 {location}</p>
        </div>

        <section className="t8-section">
          <h2>About Me</h2>
          <p>{summary}</p>
        </section>

        <section className="t8-section">
          <h2>Skills</h2>
          <ul>
            {skills.split(',').map((s, i) => <li key={i}>{s.trim()}</li>)}
          </ul>
        </section>

        <section className="t8-section">
          <h2>Achievements</h2>
          <ul>
            {achievements.map((a, i) => <li key={i}>{a.title}</li>)}
          </ul>
        </section>
      </aside>

      <main className="t8-main">
        {experiences.length > 0 && (
          <section className="t8-section">
            <h2>Experience</h2>
            {experiences.map((e, i) => (
              <div key={i} className="t8-entry">
                <strong>{e.role} @ {e.company}</strong>
                <p className="t8-date">{formatDate(e.start)} – {formatDate(e.end)}</p>
                <p>{e.description}</p>
              </div>
            ))}
          </section>
        )}

        {projects.length > 0 && (
          <section className="t8-section">
            <h2>Projects</h2>
            {projects.map((p, i) => (
              <div key={i} className="t8-entry">
                <strong>{p.title}</strong>
                <p>{p.description}</p>
              </div>
            ))}
          </section>
        )}

        {education.length > 0 && (
          <section className="t8-section">
            <h2>Education</h2>
            {education.map((e, i) => (
              <div key={i} className="t8-entry">
                <strong>{e.degree}, {e.institution}</strong>
                <p className="t8-date">{formatDate(e.start)} – {formatDate(e.end)}</p>
                <p>{e.description}</p>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
