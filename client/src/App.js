import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Cv from './pages/Cv';
import Navbar from './components/Navbar';

// Admin Pages
import AdminHome from './pages/AdminHome';
import UpdateProjects from './pages/UpdateProjects';
import UpdateSkills from './pages/UpdateSkills';
import UpdateCv from './pages/UpdateCv';
import AdminLogin from './pages/AdminLogin'

const AppWrapper = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/projects" element={<UpdateProjects />} />
        <Route path="/admin/skills" element={<UpdateSkills />} />
        <Route path="/admin/cv" element={<UpdateCv />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
