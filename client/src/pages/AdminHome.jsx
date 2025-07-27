import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import './AdminHome.css';

const AdminHome = () => {
  return (
    <AdminLayout>
    <div className="admin-home">
      <h1 className="admin-title">Admin Dashboard</h1>

      <div className="admin-grid">
        <Link to="/admin/projects" className="admin-card admin-card-projects">
          <h2>Update Projects</h2>
          <p>Add, edit, or remove portfolio projects.</p>
        </Link>

        <Link to="/admin/skills" className="admin-card admin-card-skills">
          <h2>Update Skills</h2>
          <p>Manage the skills displayed on your portfolio.</p>
        </Link>

        <Link to="/admin/cv" className="admin-card admin-card-cv">
          <h2>Update CV</h2>
          <p>Upload or change your resume/CV document.</p>
        </Link>
      </div>

      <footer className="admin-footer">
        &copy; {new Date().getFullYear()} Admin Panel. Built with ❤️.
      </footer>
    </div>
    </AdminLayout>
  );
};

export default AdminHome;
