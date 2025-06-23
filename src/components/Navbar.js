import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

const handleFAQClick = () => {
  navigate('/', { state: { scrollTo: 'faqs' } });
  setMenuOpen(false);
};

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="nav-left">
        <img src={logo} alt="Declutter Logo" className="logo" />
      </div>

      {/* Center: Main Links */}
      <div className={`nav-center ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link to="/programs" onClick={() => setMenuOpen(false)}>PROGRAMS</Link>
        <Link to="/student-landing" onClick={() => setMenuOpen(false)}>STUDENTS</Link>
        <Link to="/employee-landing" onClick={() => setMenuOpen(false)}>EMPLOYEES</Link>
        <Link to="/executive-landing" onClick={() => setMenuOpen(false)}>EXECUTIVES</Link>
        <button onClick={handleFAQClick}>FAQs</button>
      </div>

      {/* Right: Auth Links */}
      <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
        <Link to="/login" onClick={() => setMenuOpen(false)}>LOGIN</Link>
        <Link to="/signup" onClick={() => setMenuOpen(false)}>SIGNUP</Link>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
