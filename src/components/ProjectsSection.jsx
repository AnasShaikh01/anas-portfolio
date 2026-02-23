import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Resume Analyzer",
      description:
        "AI-powered resume analyzer using NLP and ML to match resumes with job descriptions and provide insights.",
      tech: ["Python", "React", "NLP", "Scikit-learn"],
      link: "https://github.com/AnasShaikh01/ai-resume-analyzer.git",
    },
    {
      title: "ReCashify",
      description:
        "Next.js platform for selling second-hand phones. Built with Tailwind and Supabase. Developed the user panel.",
      tech: ["Next.js", "Tailwind CSS", "Supabase", "React"],
      link: "https://recashifyuser.vercel.app/",
    },
    {
      title: "My Portfolio Website",
      description:
        "Personal portfolio showcasing my skills, experience, and projects. Built with React.",
      tech: ["React", "JavaScript", "Vite", "Framer Motion"],
      link: "https://anas-shaikh.vercel.app",
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="projects" id="projects">

      {/* Title */}
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Projects Row */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Content */}
            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project <FiExternalLink />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Row */}
      <div className="projects-grid">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className="project-card coming-soon"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Coming Soon</h3>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default ProjectsSection;