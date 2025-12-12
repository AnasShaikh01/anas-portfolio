import React from "react";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Resume Analyzer",
      description:
        "AI-powered resume analyzer using NLP and ML to match resumes with job descriptions and provide insights.",
      tech: ["Python", "Streamlit", "NLP", "Scikit-learn"],
    },
    {
      title: "DR Detection",
      description:
        "Deep learning model to identify diabetic retinopathy, improving early detection and treatment.",
      tech: ["Python", "Keras", "Deep Learning"],
    },
    {
      title: "My Portfolio Website",
      description:
        "Personal portfolio showcasing my skills, experience, and projects. Built with React.",
      tech: ["React", "JavaScript", "Vite", "HTML5"],
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>

      {/* First row → actual projects */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Second row → Coming Soon placeholders */}
      <div className="projects-grid">
        <div className="project-card coming-soon"><h3>Coming Soon</h3></div>
        <div className="project-card coming-soon"><h3>Coming Soon</h3></div>
        <div className="project-card coming-soon"><h3>Coming Soon</h3></div>
      </div>
    </section>
  );
};

export default ProjectsSection;
