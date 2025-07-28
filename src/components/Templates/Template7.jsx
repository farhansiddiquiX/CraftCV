// src/components/templates/Template7.jsx
import React from 'react';
import './Template7.css';

export default function Template7({ data }) {
  const {
  photoUrl, name, role, email, phone, location,
  summary, experiences = [], education = [],
  skills, projects = [], achievements = []
} = data;

  
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? dateStr : date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };


  return (
    <div className="t7-container">
      <aside className="t7-sidebar">
        {photoUrl && <img src={photoUrl} alt={name} className="t7-photo" />}
        <h1>{name}</h1>
        {role && <p className="t7-role"><i>{role}</i></p>}
        <p className="t7-role">{summary && summary.split('.')[0]}</p>
        <div className="t7-contact">
          <p>📍 {location}</p>
          <p>✉️ {email}</p>
          <p>📞 {phone}</p>
        </div>
        {skills && (
          <div className="t7-skills-section">
            <h2 id='skills'>Skills</h2>
            <ul className="t7-skills-list">
              {skills.split(',').map((s, i) => (
                <li key={i}><strong>{s.trim()}</strong></li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      <main className="t7-main">
        {summary && (
          <section>
            <h2>About</h2>
            <p>{summary}</p>
          </section>
        )}
        {experiences.length > 0 && (
          <section>
            <h2>Experience</h2>
            {experiences.map((e, i) => (
              <div key={i} className="t7-entry">
                <h3>{e.role} @ {e.company}</h3>
                <span>{formatDate(e.start)} – {formatDate(e.end)}</span>
                <p>{e.description}</p>
              </div>
            ))}
          </section>
        )}
        {education.length > 0 && (
          <section>
            <h2>Education</h2>
            {education.map((e, i) => (
              <div key={i} className="t7-entry">
                <h3>{e.degree}, {e.institution}</h3>
                <span>{formatDate(e.start)} – {formatDate(e.end)}</span>
                <p>{e.description}</p>
              </div>
            ))}
          </section>
        )}
        {projects.length > 0 && (
        <section>
          <h2>Projects</h2>
          {projects.map((p, i) => (
            <div key={i} className="t7-entry">
              <strong>{p.title}</strong>
              <p>{p.description}</p>
            </div>
          ))}
        </section>
      )}

      {achievements.length > 0 && (
        <section>
          <h2>Achievements</h2>
          {achievements.map((a, i) => (
            <div key={i} className="t7-entry">
              <strong>{a.title}</strong>
              <p>{a.description}</p>
            </div>
          ))}
        </section>
      )}

      </main>
    </div>
  );
}
