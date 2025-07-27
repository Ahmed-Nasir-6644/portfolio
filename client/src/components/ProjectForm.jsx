import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = () => {
  const [project, setProject] = useState({ title: '', description: '', image: '', link: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', project, {
        headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` },
      });
      alert('Project added!');
      setProject({ title: '', description: '', image: '', link: '' });
    } catch (err) {
      alert('Error adding project');
    }
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h3>Add New Project 🚀</h3>
      <input placeholder="Title" value={project.title}
        onChange={(e) => setProject({ ...project, title: e.target.value })} />
      <input placeholder="Description" value={project.description}
        onChange={(e) => setProject({ ...project, description: e.target.value })} />
      <input placeholder="Image URL" value={project.image}
        onChange={(e) => setProject({ ...project, image: e.target.value })} />
      <input placeholder="Project Link" value={project.link}
        onChange={(e) => setProject({ ...project, link: e.target.value })} />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
