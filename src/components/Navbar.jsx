import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Anas</div>

      {/* Nav Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        <div className="nav-button">
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            <button>Hire Me</button>
          </a>
        </div>
      </ul>

      {/* Hamburger */}
      <div
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
