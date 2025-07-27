import React, { useState } from 'react';
import Footer from '../components/Footer';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Not connected to backend)");
    // Later, integrate EmailJS or backend API here
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='page-container'>
    <div className="contact-page">
      <div className="contact-card">
        <h1>📩 Let’s Get in Touch</h1>
        <p>I'm open to opportunities, collaborations or just a friendly hello!</p>

        <ul className="contact-list">
          <li><FaEnvelope /> <a href="mailto:ahmednasir1212a@gmail.com">ahmednasir1212a@gmail.com</a></li>
          <li><FaLinkedin /> <a href="https://linkedin.com/in/ahmed-nasir-6761b527a/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><FaGithub /> <a href="https://github.com/Ahmed-Nasir-6644" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>

        {/* 📥 Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Contact;
