// src/pages/UpdateProjects.jsx
import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import './UpdateProjects.css';

const UpdateProjects = () => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    github: '',
    live: '',
  });

  const [projects, setProjects] = useState([]);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!project.title || !project.description) return;

    setProjects([...projects, { ...project, id: Date.now() }]);
    setProject({ title: '', description: '', github: '', live: '' });
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <AdminLayout>
      <div className="update-projects">
        <h1 className="update-title">Update Projects</h1>

        <form className="project-form" onSubmit={handleAddProject}>
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={project.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Project Description"
            value={project.description}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="github"
            placeholder="GitHub Link"
            value={project.github}
            onChange={handleChange}
          />
          <input
            type="url"
            name="live"
            placeholder="Live Site Link"
            value={project.live}
            onChange={handleChange}
          />
          <button type="submit">Add Project</button>
        </form>

        <div className="project-list">
          <h2>Current Projects</h2>
          {projects.length === 0 ? (
            <p className="empty">No projects added yet.</p>
          ) : (
            <ul>
              {projects.map((proj) => (
                <li key={proj.id} className="project-card">
                  <div className="card-content">
                    <div>
                      <h3>{proj.title}</h3>
                      <p>{proj.description}</p>
                      <div className="links">
                        {proj.github && (
                          <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>
                        )}
                        {proj.live && (
                          <a href={proj.live} target="_blank" rel="noreferrer">Live</a>
                        )}
                      </div>
                    </div>
                    <button onClick={() => handleDeleteProject(proj.id)} className="delete-btn">
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default UpdateProjects;
