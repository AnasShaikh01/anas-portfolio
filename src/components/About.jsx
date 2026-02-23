import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import profileImage from "../assets/profile.png";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Image */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={profileImage} alt="Anas Shaikh" />
        </motion.div>

        {/* Text */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="about-heading">About Me</h2>

          <p className="about-description">
            I’m <strong>Anas Shaikh</strong>, a Computer Science and Engineering
            (AI & ML) student with a strong passion for building impactful digital
            experiences. I enjoy transforming ideas into
            <span className="highlight"> responsive</span> and
            <span className="highlight"> scalable</span> web solutions that blend
            design with functionality.
          </p>

          <p className="about-description">
            With hands-on experience in modern web technologies, I focus on writing
            <span className="highlight"> clean, maintainable code</span> while
            bringing <span className="highlight"> creativity</span> to every project.
            My goal is to deliver solutions that not only meet client needs but also
            create <span className="highlight"> lasting value</span>.
          </p>

          <div className="traits-grid">
            <div className="trait">
              <span className="trait-icon">🚀</span>
              <p><strong>Efficiency</strong><br />Delivering on time without compromise.</p>
            </div>

            <div className="trait">
              <span className="trait-icon">🔒</span>
              <p><strong>Reliability</strong><br />Code that performs and scales.</p>
            </div>

            <div className="trait">
              <span className="trait-icon">🎨</span>
              <p><strong>Creativity</strong><br />Designing with user experience in mind.</p>
            </div>

            <div className="trait">
              <span className="trait-icon">🤝</span>
              <p><strong>Collaboration</strong><br />Working effectively with teams & clients.</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;