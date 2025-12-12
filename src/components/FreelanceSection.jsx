import React from "react";
import "./FreelanceSection.css";

export default function FreelanceSection() {
  return (
    <section className="freelance-cta">
      <div className="freelance-content">
        <div>
          <h2 className="cta-title">Want to work with me?</h2>
          <p className="cta-text">
            Always feel free to contact & hire me for your projects.
          </p>
        </div>
        <a 
          href="https://www.fiverr.com/anasshaikh01/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}
