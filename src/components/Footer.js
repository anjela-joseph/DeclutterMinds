import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; // your Declutter logo
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left: Logo + Description */}
        <div className="footer-section">
          <img src={logo} alt="Declutter Logo" className="footer-logo" />
          <p>
            DeClutter Minds stands as the catalyst for elevating (Professionals) Executives,
            Traders and Sports Persons beyond mere functionality to a realm of unparalleled excellence.
          </p>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Center: Links */}
        <div className="footer-section">
          <h4>Useful Links:</h4>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">FOUNDER</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">TRADERS COACHING</a></li>
            <li><a href="#">BOOK A SESSION</a></li>
          </ul>
        </div>

        {/* Right: Contacts */}
        <div className="footer-section">
          <h4>Contacts</h4>
          <p>Mail: <a href="mailto:joseph@declutterminds.ca">joseph@declutterminds.ca</a></p>
          <p>Tel: 1-289-231-4302 (Canada)</p>
          <p>: +91-9544243076 (India)</p>
          <p>: +971 52 278 3844 (Dubai)</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024, Declutter</p>
        <div>
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
