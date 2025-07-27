import React, { useState } from 'react';
import axios from 'axios';

const SkillForm = () => {
  const [skill, setSkill] = useState({ name: '', icon: '', category: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/skills', skill, {
        headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` },
      });
      alert('Skill added!');
      setSkill({ name: '', icon: '', category: '' });
    } catch (err) {
      alert('Error adding skill');
    }
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h3>Add New Skill 🧠</h3>
      <input placeholder="Skill Name" value={skill.name}
        onChange={(e) => setSkill({ ...skill, name: e.target.value })} />
      <input placeholder="Icon URL/Class" value={skill.icon}
        onChange={(e) => setSkill({ ...skill, icon: e.target.value })} />
      <input placeholder="Category (e.g. Language, DB)" value={skill.category}
        onChange={(e) => setSkill({ ...skill, category: e.target.value })} />
      <button type="submit">Add Skill</button>
    </form>
  );
};

export default SkillForm;
