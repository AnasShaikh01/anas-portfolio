import React from "react";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Glaucoma Detection",
      description:
        "AI-powered system using CNNs to detect glaucoma from fundus images with high accuracy.",
      tech: ["Python", "TensorFlow", "CNN"],
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
      tech: ["React", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>
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
    </section>
  );
};

export default ProjectsSection;
