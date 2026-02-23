import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const journey = [
  {
    year: "JAN 2026 – Present",
    role: "Freelance Web Developer",
    company: "Freelancing",
    desc: "Delivering high-quality web solutions for clients with focus on performance, design consistency, and scalability.",
  },
  {
    year: "NOV 2024 – FEB 2025",
    role: "Web Developer Intern",
    company: "FutureNixMedia",
    desc: "Developed responsive interfaces and worked closely with teams to deliver production-ready applications.",
  },
  {
    year: "JUL 2022 – SEP 2022",
    role: "IT Support & Technical Intern",
    company: "A-Z IT Solution",
    desc: "Handled system diagnostics, hardware maintenance, and professional technical support operations.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.25,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};

const Experience = () => {
  return (
    <section className="cine-section" id="experience">

      {/* Heading */}
      <motion.h2
        className="cine-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Professional Journey
      </motion.h2>

      <motion.p
        className="cine-subtitle"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        A cinematic timeline of my professional growth.
      </motion.p>

      {/* Timeline Container */}
      <div className="cine-container">

        {/* Curved Path */}
        <svg
          className="cine-path"
          viewBox="0 0 600 1200"
          fill="none"
        >
          <motion.path
            d="M300 30
               C120 220, 480 420, 300 600
               C120 800, 480 1000, 300 1180"
            stroke="url(#cineGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          <defs>
            <linearGradient id="cineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6c63ff" />
              <stop offset="100%" stopColor="#8d84ff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Cards */}
        {journey.map((item, i) => (
          <motion.div
            key={i}
            className={`cine-card ${i % 2 === 0 ? "left" : "right"}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true, amount: 0.4 }}
          >

            {/* Node */}
            <div className="cine-dot"></div>

            <span className="cine-year">{item.year}</span>

            <h3>{item.role}</h3>

            <h4>{item.company}</h4>

            <p>{item.desc}</p>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Experience;