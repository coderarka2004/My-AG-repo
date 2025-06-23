// src/pages/Skills.jsx or in your home page
import SkillCircle from '../components/SkillCircle';
import '../styles/Skills.css'; // optional for layout

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skill Statistics</h2>
      <p className="skills-subtitle">Core Competencies & Technical Proficiencies</p>
      <div className="skills-grid">
        <SkillCircle percentage={85} label="React" />
        <SkillCircle percentage={80} label="TailwindCSS" />
        <SkillCircle percentage={90} label="HTML" />
        <SkillCircle percentage={70} label="EJS" />
        <SkillCircle percentage={88} label="CSS" />
        <SkillCircle percentage={75} label="JavaScript" />
        <SkillCircle percentage={95} label="Python" />
        <SkillCircle percentage={72} label="SQL" />
        <SkillCircle percentage={81} label="C" />

      </div>
    </section>
  );
};

export default Skills;
