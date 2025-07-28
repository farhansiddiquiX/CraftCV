import React from 'react';
import './Template2.css';

export default function Template2({ data }) {
  const {
  photoUrl, name, role, email, phone, location,
  summary, experiences = [], education = [],
  skills, projects = [], achievements = []
} = data;


  const formatDate = (str) => {
    const d = new Date(str);
    return isNaN(d) ? str : d.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="template-modern">
      <header>
        {photoUrl && <img src={photoUrl} className="modern-photo" alt={name} />}
        <div>
          <h1>{name}</h1>
          {role && <p className="t7-role">{role}</p>}
          <div className="modern-contact">{email} | {phone} | {location}</div>
        </div>
      </header>

      {summary && <section className="modern-summary">{summary}</section>}

      {experiences.length > 0 && (
        <section>
          <h2>Experience</h2>
          {experiences.map((e, i) => (
            <div key={i} className="modern-entry">
              <div className="modern-title">{e.role}</div>
              <div className="modern-sub">{e.company}</div>
              <div className="date-range">{formatDate(e.start)} – {formatDate(e.end)}</div>
              <p>{e.description}</p>
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section>
          <h2>Education</h2>
          {education.map((e, i) => (
            <div key={i} className="modern-entry">
              <div className="modern-title">{e.degree}</div>
              <div className="modern-sub">{e.institution}</div>
              <div className="date-range">{formatDate(e.start)} – {formatDate(e.end)}</div>
              <p>{e.description}</p>
            </div>
          ))}
        </section>
      )}

      {skills && (
        <section className="modern-skills">
          <h2>Skills</h2>
          <div>
            {skills.split(',').map((s, i) => (
              <span key={i} className="skill-pill">{s.trim()}</span>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section>
          <h2>Projects</h2>
          {projects.map((p, i) => (
            <div key={i} className="modern-entry">
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
            <div key={i} className="modern-entry">
              <strong>{a.title}</strong>
              <p>{a.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
