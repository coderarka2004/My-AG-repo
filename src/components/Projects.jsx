// src/components/Projects.jsx
import '../styles/Projects.css';

const projectData = [
  {
    title: 'A-Pujas a puja website',
    description: 'It is my 1st commercial website with HTML and inline CSS',
    link: 'https://github.com/coderarka2004/apandit.github.io',
  },
  {
    title: 'QUIZ APP',
    description: 'Play quiz with a responsive website',
    link: 'https://react-quiz-koushani.netlify.app/',
  },
  {
    title: 'Low Harmonics E-Type Inverter',
    description: 'Low harmocis Envelop type inverter',
    link: 'https://drive.google.com/drive/folders/1fLQSrejeUq2-1029ulim2Flyp4K2of0d?usp=drive_link',
  },
  {
    title: 'Smart Power Distribution',
    description: 'IoT-enabled energy monitoring and relay distribution.',
    link: 'https://drive.google.com/drive/folders/1-nSU0AlV_oRI8Srfv3Yro-sJrVlppFPH?usp=drive_link',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="project-title">My Projects</h2>
      <div className="project-scroll-wrapper">
        {projectData.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noreferrer">🔗 View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
