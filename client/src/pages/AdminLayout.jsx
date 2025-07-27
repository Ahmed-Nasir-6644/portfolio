// src/pages/AdminLayout.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminLayout.css';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  return (
    <div className="admin-layout">
      <nav className="admin-nav">
        <div className="admin-nav-left">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/projects">Projects</Link>
          <Link to="/admin/skills">Skills</Link>
          <Link to="/admin/cv">CV</Link>
        </div>

        <div className="admin-nav-right">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className="admin-section">{children}</div>
    </div>
  );
};

export default AdminLayout;
