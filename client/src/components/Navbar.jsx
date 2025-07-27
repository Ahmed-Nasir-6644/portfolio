import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // make sure the path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <NavLink to="/admin-login" className="navbar-title">Ahmed Nasir</NavLink>
      </div>
      <input type="checkbox" id="toggle" className="nav-toggle" />
      <label htmlFor="toggle" className="hamburger">&#9776;</label>
      <div className="navbar-links">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/skills" className="nav-link">Skills</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        <NavLink to="/cv" className="nav-link">Cv</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
