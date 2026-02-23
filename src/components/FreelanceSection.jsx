import React from "react";
import { motion } from "framer-motion";
import "./FreelanceSection.css";

export default function FreelanceSection() {
  return (
    <section className="freelance-cta">

      <motion.div
        className="freelance-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >

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

      </motion.div>

    </section>
  );
}