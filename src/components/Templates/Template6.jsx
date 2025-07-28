import React from 'react';
import './Template6.css';

export default function Template6({ data }) {
  const {
  photoUrl, name, role, email, phone, location,
  summary, experiences = [], education = [],
  skills, projects = [], achievements = []
} = data;


  const formatDate = (str) => {
    const d = new Date(str);
    return isNaN(d) ? str : d.toLocaleString('default', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="t6-timeline-container">
      <header className="t6-header">
        {photoUrl && <img src={photoUrl} alt={name} className="t6-avatar" />}
        <div className="t6-header-text">
          <h1>{name}</h1>
          {role && <p className="t6-role"><i>{role}</i></p>}
          <p>{location}</p>
          <p>{email} | {phone}</p>
        </div>
      </header>

      {summary && (
        <section className="t6-summary">
          <h2>About Me</h2>
          <p>{summary}</p>
        </section>
      )}

      {experiences.length > 0 && (
        <section className="t6-section">
          <h2>Experience</h2>
          <div className="t6-timeline">
            <div className="t6-line" />
            {experiences.map((e, idx) => (
              <div key={idx} className="t6-event">
                <div className="t6-dot" />
                <div className="t6-content">
                  <h3>{e.role}</h3>
                  <p className="t6-meta">{e.company}</p>
                  <p className="t6-date">{formatDate(e.start)} – {formatDate(e.end)}</p>
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section className="t6-section">
          <h2>Education</h2>
          <div className="t6-timeline">
            <div className="t6-line" />
            {education.map((e, idx) => (
              <div key={idx} className="t6-event">
                <div className="t6-dot" />
                <div className="t6-content">
                  <h3>{e.degree}</h3>
                  <p className="t6-meta">{e.institution}</p>
                  <p className="t6-date">{formatDate(e.start)} – {formatDate(e.end)}</p>
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="t6-section">
          <h2>Projects</h2>
          {projects.map((p, i) => (
            <div key={i} className="t6-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </section>
      )}

      {achievements.length > 0 && (
        <section className="t6-section">
          <h2>Achievements</h2>
          {achievements.map((a, i) => (
            <div key={i} className="t6-card">
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </div>
          ))}
        </section>
      )}

      {skills && (
        <section className="t6-skills">
          <h2>Skills</h2>
          <div className="t6-tags">
            {skills.split(',').map((s, i) => <span key={i}>{s.trim()}</span>)}
          </div>
        </section>
      )}
    </div>
  );
}
