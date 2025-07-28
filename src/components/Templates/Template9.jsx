// src/components/templates/Template9.jsx
import React from 'react';
import './Template9.css';

export default function Template9({ data }) {
  const {
    photoUrl,
    name,
    role,
    email,
    phone,
    location,
    summary,
    experiences = [],
    projects = [],
    education = [],
    achievements = [],
    skills = ''
  } = data;

  const formatDate = (str) => {
    const d = new Date(str);
    return isNaN(d.getTime())
      ? str
      : d.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="t9-container">
      <aside className="t9-sidebar">
        {photoUrl && <img src={photoUrl} alt={name} className="t9-photo" />}
        <h1 className="t9-name">{name}</h1>
        {role && <p className="t9-role">{role}</p>}
        <p className="t9-contact">{location}<br />{email}<br />{phone}</p>

        <section className="t9-section">
          <h2>Skills</h2>
          <ul>
            {skills.split(',').map((s, i) => <li key={i}><strong>{s.trim()}</strong></li>)}
          </ul>
        </section>

        <section className="t9-section">
          <h2>Achievements</h2>
          <ul>
            {achievements.map((a, i) => (
              <li key={i}>
                <strong>{a.title}</strong>
                <p>{a.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </aside>

      <main className="t9-main">
        {summary && (
          <section className="t9-section">
            <h2>About</h2>
            <p>{summary}</p>
          </section>
        )}

        {experiences.length > 0 && (
          <section className="t9-section">
            <h2>Experience</h2>
            {experiences.map((e, i) => (
              <div key={i} className="t9-entry">
                <h3>{e.role} @ {e.company}</h3>
                <span className="t9-date">{formatDate(e.start)} – {formatDate(e.end)}</span>
                <p>{e.description}</p>
              </div>
            ))}
          </section>
        )}

        {projects.length > 0 && (
          <section className="t9-section">
            <h2>Projects</h2>
            {projects.map((p, i) => (
              <div key={i} className="t9-entry">
                <h3>{p.title}</h3>
                <span className="t9-date">{formatDate(p.date)}</span>
                <p>{p.description}</p>
              </div>
            ))}
          </section>
        )}

        {education.length > 0 && (
          <section className="t9-section">
            <h2>Education</h2>
            {education.map((e, i) => (
              <div key={i} className="t9-entry">
                <h3>{e.degree}, {e.institution}</h3>
                <span className="t9-date">{formatDate(e.start)} – {formatDate(e.end)}</span>
                <p>{e.description}</p>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
