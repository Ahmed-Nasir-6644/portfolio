import Footer from '../components/Footer';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built using React and Node.js.',
    tech: ['React', 'Node.js', 'MongoDB'],
    live: 'https://yourportfolio.vercel.app',
    github: 'https://github.com/Ahmed-Nasir-6644/portfolio'
  },
  {
    title: 'Job Portal',
    description: 'A full-stack MERN application for job listings and applications.',
    tech: ['React', 'Express', 'MongoDB'],
    live: '',
    github: 'https://github.com/Ahmed-Nasir-6644/Online-Job-Portal'
  },
  {
    title: 'AI Chatbot',
    description: 'Conversational chatbot using NLP and OpenAI API.',
    tech: ['Python', 'Flask', 'OpenAI'],
    live: '',
    github: ''
  },
    {
    title: 'Portfolio Website',
    description: 'My personal portfolio built using React and Node.js.',
    tech: ['React', 'Node.js', 'MongoDB'],
    live: 'https://yourportfolio.vercel.app',
    github: 'https://github.com/Ahmed-Nasir-6644/portfolio'
  },
  {
    title: 'Job Portal',
    description: 'A full-stack MERN application for job listings and applications.',
    tech: ['React', 'Express', 'MongoDB'],
    live: '',
    github: 'https://github.com/Ahmed-Nasir-6644/Online-Job-Portal'
  },
  {
    title: 'AI Chatbot',
    description: 'Conversational chatbot using NLP and OpenAI API.',
    tech: ['Python', 'Flask', 'OpenAI'],
    live: '',
    github: ''
  },  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built using React and Node.js.',
    tech: ['React', 'Node.js', 'MongoDB'],
    live: 'https://yourportfolio.vercel.app',
    github: 'https://github.com/Ahmed-Nasir-6644/portfolio'
  },
  {
    title: 'Job Portal',
    description: 'A full-stack MERN application for job listings and applications.',
    tech: ['React', 'Express', 'MongoDB'],
    live: '',
    github: 'https://github.com/Ahmed-Nasir-6644/Online-Job-Portal'
  },
 
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="page-container">
      <div className="projects-page">
        <h1 className="projects-heading">💼 My Projects</h1>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div className="project-card fade-in" key={index}>
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>
              <div className="tech-tags">
                {proj.tech.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {proj.live && <a href={proj.live} target="_blank" rel="noreferrer">Live Demo</a>}
                {proj.github && <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};


export default Projects;
