import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const categories = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Backend & Database",
    skills: ["Python", "PHP", "MySQL", "Supabase", "Flask"],
  },
  {
    title: "Platforms & CMS",
    skills: ["WordPress", "Shopify"],
  },
  {
    title: "Tools & Collaboration",
    skills: ["Canva", "Git", "GitHub"],
  },
  {
    title: "Additional Expertise",
    skills: ["Login Authentication", "E-commerce", "Payment Integration"],
  },
];

/* Animations */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">

      {/* Title */}
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My <span className="highlight">Skills</span>
      </motion.h2>

      {/* Grid */}
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            className="category-card"
            variants={cardVariants}
          >

            {/* Header */}
            <div className="card-header">
              <h3 className="category-title">{category.title}</h3>
            </div>

            {/* Pills */}
            <div className="skills-pills">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Skills;