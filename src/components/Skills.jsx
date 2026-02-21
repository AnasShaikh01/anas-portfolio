import React from "react";
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

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">
        My <span className="highlight">Skills</span>
      </h2>

      <div className="skills-grid">
        {categories.map((category, idx) => (
          <div key={idx} className="category-card">
            
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

          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
