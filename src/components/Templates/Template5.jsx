import React from 'react';
import './Template5.css';

export default function Template5({ data }) {
  const {
  photoUrl, name, role, email, phone, location,
  summary, experiences = [], education = [],
  skills, projects = [], achievements = []
} = data;


  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return isNaN(d) ? dateStr : d.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="template5-container">
      <aside className="template5-aside">
        {photoUrl && (
          <div className="template5-photo-wrapper">
            
            <img src={photoUrl} alt={name} className="template5-photo" />
          </div>
        )}
        <h1 className="name">{name}</h1>
        {role && <p className="title"><i>{role}</i></p>}
        <p className="location">{location}</p>
        <div className="contact">
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        {skills && (
          <section className="section">
            <h2 id='skills'>Skills</h2>
            <ul className="skill-list">
              {skills.split(',').map((s, i) => (
                <li key={i}>{s.trim()}</li>
              ))}
            </ul>
          </section>
        )}
      </aside>

      <main className="template5-main">
        {summary && (
          <section className="section">
            <h2>About</h2>
            <p>{summary}</p>
          </section>
        )}

        {experiences.length > 0 && (
          <section className="section">
            <h2>Experience</h2>
            {experiences.map((e, i) => (
              <div key={i} className="entry">
                <div className="entry-header">
                  <strong>{e.role}</strong>
                  <span className="date">{formatDate(e.start)} – {formatDate(e.end)}</span>
                </div>
                <p className="entry-sub">{e.company}</p>
                <p>{e.description}</p>
              </div>
            ))}
          </section>
        )}

        {education.length > 0 && (
          <section className="section">
            <h2>Education</h2>
            {education.map((e, i) => (
              <div key={i} className="entry">
                <div className="entry-header">
                  <strong>{e.degree}</strong>
                  <span className="date">{formatDate(e.start)} – {formatDate(e.end)}</span>
                </div>
                <p className="entry-sub">{e.institution}</p>
                <p>{e.description}</p>
              </div>
            ))}
          </section>
        )}

        {projects.length > 0 && (
          <section className="section">
            <h2>Projects</h2>
            {projects.map((p, i) => (
              <div key={i} className="entry">
                <strong>{p.title}</strong>
                <p>{p.description}</p>
              </div>
            ))}
          </section>
        )}

        {achievements.length > 0 && (
          <section className="section">
            <h2>Achievements</h2>
            {achievements.map((a, i) => (
              <div key={i} className="entry">
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