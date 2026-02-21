import React from "react";
import { FiExternalLink } from "react-icons/fi";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Resume Analyzer",
      description:
        "AI-powered resume analyzer using NLP and ML to match resumes with job descriptions and provide insights.",
      tech: ["Python", "React", "NLP", "Scikit-learn"],
      link: "#",
    },

    {
      title: "ReCashify",
      description:
        "Next.js platform for selling second-hand phones. Built with Tailwind and Supabase. Developed the user panel.",
      tech: ["Next.js", "Tailwind CSS", "Supabase", "React"],
      link: "#",
    },

    {
      title: "My Portfolio Website",
      description:
        "Personal portfolio showcasing my skills, experience, and projects. Built with React.",
      tech: ["React", "JavaScript", "Vite", "HTML5"],
      link: "https://anas-shaikh.vercel.app",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>

      {/* Projects Row */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

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

          </div>
        ))}
      </div>

      {/* Coming Soon Row */}
      <div className="projects-grid">
        <div className="project-card coming-soon">
          <h3>Coming Soon</h3>
        </div>

        <div className="project-card coming-soon">
          <h3>Coming Soon</h3>
        </div>

        <div className="project-card coming-soon">
          <h3>Coming Soon</h3>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;