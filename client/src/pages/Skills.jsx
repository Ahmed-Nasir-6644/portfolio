import Footer from '../components/Footer';
import './Skills.css';
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaTools,
} from 'react-icons/fa';
import {
  SiJavascript, SiMongodb, SiMysql, SiCplusplus, SiPostman, SiDotnet, SiExpress,
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
const categorizedSkills = {
  Languages: [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
  ],
  Frameworks: [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'asp.net', icon: <SiDotnet /> },
  ],
  Databases: [
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'VS Code', icon: <VscVscode /> },
  ],
  Concepts: [
    { name: 'OOP', icon: <FaTools /> },
    { name: 'Data Structures', icon: <FaTools /> },
    { name: 'REST APIs', icon: <FaTools /> },
    { name: 'SOLID Principles', icon: <FaTools /> },
    { name: 'Microservices', icon: <FaTools /> },

  ],
};

const Skills = () => {
  return (
        <div className="page-container">

    <div className="skills-page">
      <h1 className="skills-title">⚙️ Technical Skills</h1>
      {Object.entries(categorizedSkills).map(([category, skills]) => (
        <div key={category} className="skills-category">
          <h2>{category}</h2>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div className="skill-card fade-in" key={i}>
                <div className="skill-icon">{skill.icon}</div>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </div>
  );
};

export default Skills;
