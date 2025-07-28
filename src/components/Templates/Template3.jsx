import React from 'react';
import './Template3.css';

export default function Template3({ data }) {
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
    <div className="column-container">
      <aside className="column-sidebar">
        {photoUrl && <img src={photoUrl} className="sidebar-photo" alt={name} />}
        <h1>{name}</h1>
        {role && <p className="t7-role">{role}</p>}
        <p>{location}</p>
        <p>{email}</p>
        <p>{phone}</p>

        {skills && (
          <>
            <h2>Skills</h2>
            <ul className="skill-list">
              {skills.split(',').map((s, i) => (
                <li key={i}><strong>• {s.trim()}</strong></li>
              ))}
            </ul>
          </>
        )}
      </aside>

      <main className="column-main">
        {summary && (
          <>
            <h2>Profile</h2>
            <p>{summary}</p>
          </>
        )}

        {experiences.length > 0 && (
          <>
            <h2>Experience</h2>
            {experiences.map((e, i) => (
              <div key={i} className="main-entry">
                <div className="entry-title">{e.role}</div>
                <div className="entry-sub">{e.company}</div>
                <div className="entry-date">{formatDate(e.start)} – {formatDate(e.end)}</div>
                <p>{e.description}</p>
              </div>
            ))}
          </>
        )}

        {education.length > 0 && (
          <>
            <h2>Education</h2>
            {education.map((e, i) => (
              <div key={i} className="main-entry">
                <div className="entry-title">{e.degree}</div>
                <div className="entry-sub">{e.institution}</div>
                <div className="entry-date">{formatDate(e.start)} – {formatDate(e.end)}</div>
                <p>{e.description}</p>
              </div>
            ))}
          </>
        )}

        {projects.length > 0 && (
          <>
            <h2>Projects</h2>
            {projects.map((p, i) => (
              <div key={i} className="main-entry">
                <div className="entry-title">{p.title}</div>
                <p>{p.description}</p>
              </div>
            ))}
          </>
        )}

        {achievements.length > 0 && (
          <>
            <h2>Achievements</h2>
            {achievements.map((a, i) => (
              <div key={i} className="main-entry">
                <div className="entry-title">{a.title}</div>
                <p>{a.description}</p>
              </div>
            ))}
          </>
        )}
      </main>
    </div>
  );
}
