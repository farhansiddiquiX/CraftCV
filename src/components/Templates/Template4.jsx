import React from 'react';
import './Template4.css';

export default function Template4({ data }) {
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
    <div className="template4-container">
      <div className="template4-header">
        <div className="photo-container">
          {photoUrl && (
            <>
              <img src={photoUrl} alt={name} className="photo" />
            </>
          )}
        </div>
        <div className="contact-info">
          <h1>{name}</h1>
          {role && <p className="t7-role">{role}</p>}
          <p>{location}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>

      {summary && (
        <section>
          <h2>Profile</h2>
          <p>{summary}</p>
        </section>
      )}

      {skills && (
        <section>
          <h2>Skills</h2>
          <ul className="skills-list">
            {skills.split(',').map((skill, index) => (
              <li key={index}> {skill.trim()}</li>
            ))}
          </ul>
        </section>
      )}

      {experiences.length > 0 && (
        <section>
          <h2>Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="entry">
              <div className="entry-header">
                <div>
                  <strong>{exp.role}</strong> — {exp.company}
                </div>
                <div className="date-range">{formatDate(exp.start)} – {formatDate(exp.end)}</div>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section>
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="entry">
              <div className="entry-header">
                <div>
                  <strong>{edu.degree}</strong> — {edu.institution}
                </div>
                <div className="date-range">{formatDate(edu.start)} – {formatDate(edu.end)}</div>
              </div>
              <p>{edu.description}</p>
            </div>
          ))}
        </section>
      )}

      {projects.length > 0 && (
        <section>
          <h2>Projects</h2>
          {projects.map((proj, index) => (
            <div key={index} className="entry">
              <div className="entry-title">{proj.title}</div>
              <p>{proj.description}</p>
            </div>
          ))}
        </section>
      )}

      {achievements.length > 0 && (
        <section>
          <h2>Achievements</h2>
          {achievements.map((ach, index) => (
            <div key={index} className="entry">
              <div className="entry-title">{ach.title}</div>
              <p>{ach.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
