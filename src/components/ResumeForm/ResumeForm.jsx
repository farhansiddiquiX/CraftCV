// src/components/ResumeForm/ResumeForm.jsx
import React from 'react';
import './ResumeForm.css';

const emptyExperience  = { company: '', role: '', start: '', end: '', description: '' };
const emptyEducation   = { institution: '', degree: '', start: '', end: '', description: '' };
const emptyProject     = { title: '', description: '' };
const emptyAchievement = { title: '', description: '' };

export default function ResumeForm({ data, onDataChange }) {
  const update = changes => onDataChange({ ...data, ...changes });

  const handleField = e => {
    update({ [e.target.name]: e.target.value });
  };

  const handleImage = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        update({ photoUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleArrayChange = (field, idx, key, value) => {
    const arr = [...data[field]];
    arr[idx] = { ...arr[idx], [key]: value };
    update({ [field]: arr });
  };

  const addEntry = field => {
    const empty = {
      experiences: emptyExperience,
      education: emptyEducation,
      projects: emptyProject,
      achievements: emptyAchievement
    }[field];
    update({ [field]: [...data[field], empty] });
  };

  const removeEntry = (field, idx) => {
    const arr = data[field].filter((_, i) => i !== idx);
    update({ [field]: arr });
  };

  return (
    <div className="resume-form">
      <div className="form-heading">
        <h1>Build Your Resume Now</h1>
        <p>Fill in your details below and preview your resume instantly.</p>
      </div>
      <h2>Enter Your Details</h2>

      <div className="image-input">
        <label>
          Profile Photo:
          <input type="file" accept="image/*" onChange={handleImage} />
        </label>
        {data.photoUrl && (
          <img className="preview-photo" src={data.photoUrl} alt="Preview" />
        )}
      </div>

      <input
        name="name"
        placeholder="Full Name"
        value={data.name}
        onChange={handleField}
      />
      <input
        name="role"
        placeholder="Professional Role"
        value={data.role || ''}
        onChange={handleField}
      />
      <input
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleField}
      />
      <input
        name="phone"
        placeholder="Phone"
        value={data.phone}
        onChange={handleField}
      />
      <input
        name="location"
        placeholder="Location"
        value={data.location}
        onChange={handleField}
      />
      <textarea
        name="summary"
        placeholder="Professional Summary"
        value={data.summary}
        onChange={handleField}
      />

      {/* Experience */}
      {data.experiences.map((exp, i) => (
        <div key={i} className="entry-group">
          <input
            placeholder="Company"
            value={exp.company}
            onChange={e => handleArrayChange('experiences', i, 'company', e.target.value)}
          />
          <input
            placeholder="Role"
            value={exp.role}
            onChange={e => handleArrayChange('experiences', i, 'role', e.target.value)}
          />
          <div className="dates">
            <input
              type="month"
              value={exp.start}
              onChange={e => handleArrayChange('experiences', i, 'start', e.target.value)}
            />
            <span>–</span>
            <input
              type="month"
              value={exp.end}
              onChange={e => handleArrayChange('experiences', i, 'end', e.target.value)}
            />
          </div>
          <textarea
            placeholder="Description"
            value={exp.description}
            onChange={e => handleArrayChange('experiences', i, 'description', e.target.value)}
          />
          <button type="button" onClick={() => removeEntry('experiences', i)}>✖</button>
        </div>
      ))}
      <button type="button" id='add-exp' onClick={() => addEntry('experiences')}>
        + Add Experience
      </button>

      {/* Education */}
      {data.education.map((edu, i) => (
        <div key={i} className="entry-group">
          <input
            placeholder="Institution"
            value={edu.institution}
            onChange={e => handleArrayChange('education', i, 'institution', e.target.value)}
          />
          <input
            placeholder="Degree"
            value={edu.degree}
            onChange={e => handleArrayChange('education', i, 'degree', e.target.value)}
          />
          <div className="dates">
            <input
              type="month"
              value={edu.start}
              onChange={e => handleArrayChange('education', i, 'start', e.target.value)}
            />
            <span>–</span>
            <input
              type="month"
              value={edu.end}
              onChange={e => handleArrayChange('education', i, 'end', e.target.value)}
            />
          </div>
          <textarea
            placeholder="Description"
            value={edu.description}
            onChange={e => handleArrayChange('education', i, 'description', e.target.value)}
          />
          <button type="button" onClick={() => removeEntry('education', i)}>✖</button>
        </div>
      ))}
      <button type="button" onClick={() => addEntry('education')}>
        + Add Education
      </button>

      {/* Skills */}
      <div className="section">
        <h3>Skills</h3>
        <textarea
          name="skills"
          placeholder="Your skills, comma‑separated"
          value={data.skills}
          onChange={handleField}
        />
      </div>

      {/* Projects */}
      {data.projects.map((p, i) => (
        <div key={i} className="entry-group">
          <input
            placeholder="Project Title"
            value={p.title}
            onChange={e => handleArrayChange('projects', i, 'title', e.target.value)}
          />
          <textarea
            placeholder="Project Description"
            value={p.description}
            onChange={e => handleArrayChange('projects', i, 'description', e.target.value)}
          />
          <button type="button" onClick={() => removeEntry('projects', i)}>✖</button>
        </div>
      ))}
      <button type="button" id='add-project' onClick={() => addEntry('projects')}>
        + Add Project
      </button>

      {/* Achievements */}
      {data.achievements.map((a, i) => (
        <div key={i} className="entry-group">
          <input
            placeholder="Achievement Title"
            value={a.title}
            onChange={e => handleArrayChange('achievements', i, 'title', e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={a.description}
            onChange={e => handleArrayChange('achievements', i, 'description', e.target.value)}
          />
          <button type="button" onClick={() => removeEntry('achievements', i)}>✖</button>
        </div>
      ))}
      <button type="button" onClick={() => addEntry('achievements')}>
        + Add Achievement
      </button>
    </div>
  );
}
