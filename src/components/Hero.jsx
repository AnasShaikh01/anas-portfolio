import React from 'react';
import './Hero.css';
import AnasResume from '../assets/AnasResume.pdf';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>Hi!</h3>
        <h1>I am Anas<br />Shaikh</h1>
        <h4>ASPIRING AI & ML ENGINEER<br />WEB DEVELOPER</h4>

        <a href={AnasResume} download="Anas-Shaikh-Resume.pdf" className="hero-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
