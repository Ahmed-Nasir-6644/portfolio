import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="page-container">
      <div className="home">
        <div className="hero">
          <img src="/images/profile.jpeg" alt="Profile" className="hero-image" />
          <h1>Hi, I'm Ahmed Nasir</h1>
          <p>A passionate Software Developer & CS Student</p>

          <div className="social-icons">
            <a href="https://github.com/Ahmed-Nasir-6644" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/ahmed-nasir-6761b527a/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:ahmednasir1212a@gmail.com"><FaEnvelope /></a>
          </div>

          <a href="/cv" className="btn">View My CV</a>
        </div>

        <section className="projects-preview">
          <h2>
            <Link to="/projects" className="section-heading-link">
              🚀 Featured Projects
            </Link>
          </h2>
          <div className="project-cards">
            <div className="project-card">
              <h3>Job Portal</h3>
              <p>Full-stack MERN job portal with authentication & role-based access.</p>
            </div>
            <div className="project-card">
              <h3>AI Chatbot</h3>
              <p>React-based chatbot using OpenAI API for real-time Q&A.</p>
            </div>
            <div className="project-card">
              <h3>Portfolio Site</h3>
              <p>The site you're viewing now, made with React and custom CSS!</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
