// src/components/About.jsx
import '../styles/About.css';
import '../styles/SharedSection.css';

const About = () => (
  <section id="about" className="about slide-in">
    <h2 className="section-title">About Me</h2>
    <p className="about-text">
      I'm <strong className="highlight-yellow">Arka Goswami</strong>, a 2nd year
      <span className="highlight"> Electrical Engineering </span> student at
      <span className="highlight"> IEM, Salt Lake</span>.
      <br /><br />
      I specialize in:
      <span className="hover-skill" data-tooltip="Prototyping embedded systems"> Arduino </span>,
      <span className="hover-skill" data-tooltip="Simulating circuits virtually"> Tinkercad </span>,
      <span className="hover-skill" data-tooltip="Designing printed circuit boards"> PCB Design </span>,
      <span className="hover-skill" data-tooltip="Frontend frameworks for web apps"> React </span>,
      <span className="hover-skill" data-tooltip="Scripting, automation, and ML"> Python </span>,
      <span className="hover-skill" data-tooltip="Handling relational databases"> SQL </span>,
      <span className="hover-skill" data-tooltip="Core database concepts"> DBMS </span>,
      <span className="hover-skill" data-tooltip="General purpose programming"> C </span>,
      <span className="hover-skill" data-tooltip="HTML, CSS, JS, UI/UX"> Web Development </span> and more.
      <br /><br />
      I'm passionate about integrating smart software with real-world hardware systems.
    </p>

    <div className="about-buttons">
      {/* 🔗 Repositories */}
      <a
        href="https://drive.google.com/drive/folders/1rMiOMNvDGvX1qAU0D31pRABR_J7dCHrj?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="repo-button hover-skill"
        data-tooltip="See my project files & codes"
      >
        📂 View My Repositories
      </a>

      {/* 📄 CV download from public folder */}
      <a
        href="https://drive.google.com/drive/folders/1l38aoMvGGq3dYcWoQ_wE1DnQRqRdXOxj?usp=drive_link"
        download="Arka_Goswami_CV.pdf"
        className="cv-button hover-skill"
        data-tooltip="Download my professional CV"
      >
        📄 Download My CV
      </a>

      {/* 📜 Certificates link */}
      <a
        href="https://drive.google.com/drive/folders/1gFqaRAn0fSGYVFSg2N7_YcAh-j27dJW8?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="cert-button hover-skill"
        data-tooltip="View certificates from courses & competitions"
      >
        📜 View My Certificates
      </a>

      {/* 📍 Google Maps location */}
      <a
        href="https://www.google.com/maps/place/IEM+Kolkata/@22.5726925,88.4347932,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027514cd20d659:0x4b66eefc1cb3ed78!8m2!3d22.5726925!4d88.4373735!16s%2Fg%2F11fcv9lb9h?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="map-button hover-skill"
        data-tooltip="View IEM Salt Lake on Google Maps"
      >
        📍 View IEM, Salt Lake
      </a>
    </div>

    <div id="certificates" className="certificates">
      <h3>🎓 Certificates</h3>
      <p>Coming Soon: AI, IoT, Power Systems, Web Development & More!</p>
    </div>
  </section>
);

export default About;
