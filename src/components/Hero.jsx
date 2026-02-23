import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import AnasResume from "../assets/AnasResume.pdf";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi!
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          I am Anas <br /> Shaikh
        </motion.h1>

        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          ASPIRING AI & ML ENGINEER <br /> WEB DEVELOPER
        </motion.h4>

        <motion.a
          href={AnasResume}
          download="Anas-Shaikh-Resume.pdf"
          className="hero-btn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          Download Resume
        </motion.a>

      </motion.div>
    </section>
  );
};

export default Hero;