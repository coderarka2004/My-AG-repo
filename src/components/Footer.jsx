// src/components/Footer.jsx
import '../styles/Footer.css';
import logo from '../assets/mylogo.jpg';
import {
  FaFacebook, FaGithub, FaLinkedin, FaYoutube, FaWhatsapp
} from 'react-icons/fa';

const Footer = () => (
  <footer className="footer-grid">
    <div className="footer-column mission">
      <img src={logo} alt="Arka Goswami Logo" className="footer-logo-big" />
      <p>Building a smarter future through tech, design, and innovation.</p>
      <div className="footer-socials">
        <a href="https://facebook.com/arka.goswami.576725/" target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href="https://github.com/coderarka2004" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/arka-goswami-635945287/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://www.youtube.com/channel/UC6sYTQK9qF9sR9-zHTjjWkw" target="_blank" rel="noreferrer"><FaYoutube /></a>
        <a href="https://wa.me/6290706150" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
      </div>
    </div>

    <div className="footer-column-group">
      <div className="footer-column">
        <h4>Solutions</h4>
        <ul>
          <li><a href="https://github.com/coderarka2004?tab=repositories&q=ml&type=&language=" target="_blank" rel="noreferrer">AI & ML</a></li>
          <li><a href="https://www.tinkercad.com/dashboard" target="_blank" rel="noreferrer">IoT Projects</a></li>
          <li><a href="https://github.com/dashboard" target="_blank" rel="noreferrer">Web Development</a></li>
          <li><a href="https://drive.google.com/drive/folders/1rMiOMNvDGvX1qAU0D31pRABR_J7dCHrj?usp=sharing" target="_blank" rel="noreferrer">Embedded Systems</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Support</h4>
        <ul>
          <li><a href="mailto:arkagoswami41@gmail.com" target="_blank" rel="noreferrer">Contact Me</a></li>
          <li><a href="https://drive.google.com/drive/folders/1rMiOMNvDGvX1qAU0D31pRABR_J7dCHrj" target="_blank" rel="noreferrer">Docs & Repos</a></li>
          <li><a href="https://drive.google.com/drive/folders/1l38aoMvGGq3dYcWoQ_wE1DnQRqRdXOxj?usp=drive_link" download>Resume & CV</a></li>
          <li><a href="https://drive.google.com/drive/folders/1wl3U0-yUVwdcoPBXorF-nM80qCMloWT3?usp=drive_link" target="_blank" rel="noreferrer">Project Guide</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2025 Arka Goswami. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
