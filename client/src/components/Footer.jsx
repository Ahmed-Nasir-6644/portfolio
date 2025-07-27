import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Ahmed Nasir. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://github.com/Ahmed-Nasir-6644" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/ahmed-nasir-6761b527a/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:ahmednasir1212a@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
