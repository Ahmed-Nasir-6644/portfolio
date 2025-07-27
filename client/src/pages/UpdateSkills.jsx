// src/pages/UpdateSkills.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from './AdminLayout';
import './UpdateSkills.css';

const UpdateSkills = () => {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState('');
  const [logo, setLogo] = useState(null);

  const fetchSkills = async () => {
    const res = await axios.get('http://localhost:5000/api/skills');
    setSkills(res.data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleAddSkill = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    if (logo) formData.append('logo', logo);

    try {
      await axios.post('http://localhost:5000/api/skills', formData);
      setName('');
      setLogo(null);
      fetchSkills();
    } catch (err) {
      console.error('Error uploading skill:', err);
      alert('Failed to add skill.');
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/skills/${id}`);
    fetchSkills();
  };

  return (
    <AdminLayout>
      <div className="update-skills">
        <h1 className="skills-title">Update Skills</h1>

        <form className="skills-form" onSubmit={handleAddSkill}>
          <input
            type="text"
            placeholder="Skill Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setLogo(e.target.files[0])}
            required
          />
          <button type="submit">Add Skill</button>
        </form>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill._id}>
              <img
                src={`http://localhost:5000/uploads/skills/${skill.logo}`}
                alt={skill.name}
              />
              <p>{skill.name}</p>
              <button className="delete-btn" onClick={() => handleDelete(skill._id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default UpdateSkills;
