import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>Hi!</h3>
        <h1>I am Anas<br />Shaikh</h1>
        <h4>ASPIRING AI & ML ENGINEER<br />WEB DEVELOPER</h4>

        <a href="/resume.pdf" download className="hero-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
