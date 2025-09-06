import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaPhp, FaWordpress, FaShopify } from "react-icons/fa";
import { SiMysql, SiCanva, SiGit, SiGithub, SiNodedotjs } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { RiMoneyDollarCircleFill, RiLoginBoxLine, RiShoppingCart2Fill, RiBankCard2Fill } from "react-icons/ri";
import "./Skills.css";

const categories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
      { name: "CSS", icon: <FaCss3Alt className="skill-icon" /> },
      { name: "JavaScript", icon: <FaJs className="skill-icon" /> },
      { name: "React", icon: <FaReact className="skill-icon" /> },
      { name: "Node.js", icon: <SiNodedotjs className="skill-icon" /> },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Python", icon: <FaPython className="skill-icon" /> },
      { name: "PHP", icon: <FaPhp className="skill-icon" /> },
      { name: "MySQL", icon: <SiMysql className="skill-icon" /> },
    ],
  },
  {
    title: "Platforms & CMS",
    skills: [
      { name: "WordPress", icon: <FaWordpress className="skill-icon" /> },
      { name: "Shopify", icon: <FaShopify className="skill-icon" /> },
    ],
  },
  {
    title: "Tools & Collaboration",
    skills: [
      { name: "Canva", icon: <SiCanva className="skill-icon" /> },
      { name: "Git", icon: <SiGit className="skill-icon" /> },
      { name: "GitHub", icon: <SiGithub className="skill-icon" /> },
    ],
  },
  {
    title: "Additional Expertise",
    skills: [
      { name: "Login Authentication", icon: <RiLoginBoxLine className="skill-icon" /> },
      { name: "E-commerce Functionality", icon: <RiShoppingCart2Fill className="skill-icon" /> },
      { name: "Payment Integration", icon: <RiBankCard2Fill className="skill-icon" /> },

    ],
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
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-icons">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  {skill.icon}
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
