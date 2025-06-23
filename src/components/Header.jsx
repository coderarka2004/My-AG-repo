import { useEffect, useRef } from 'react';
import {
  FaLinkedin, FaWhatsapp, FaGithub,
  FaYoutube, FaFacebook, FaBlogger, FaAmazon
} from 'react-icons/fa';
import '../styles/SharedSection.css';


import logo from '../assets/mylogo.jpg';
import profilePic from '../assets/arka.jpg';
import '../styles/Header.css';

const Header = () => {
  const headerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);
  

  return (
    <header ref={headerRef} className="App-header section-fade">
      <div className="profile-flex-row">
        <img src={profilePic} alt="Arka Goswami" className="profile-pic" />
        <img src={logo} alt="Logo" className="App-logo-full" />
      </div>
      

      <div className="text-block">
        <h1>Hi, I'm Arka Goswami</h1>
        <p>Electrical Engineering Student Form IEM salt Lake | Tech Enthusiast</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/arka-goswami-635945287/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://wa.me/6290706150" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          <a href="https://github.com/coderarka2004" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.youtube.com/channel/UC6sYTQK9qF9sR9-zHTjjWkw" target="_blank" rel="noreferrer"><FaYoutube /></a>
          <a href="https://www.facebook.com/arka.goswami.576725/" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://www.blogger.com/blog/posts/5172323640708398485" target="_blank" rel="noreferrer"><FaBlogger /></a>
          <a href="https://www.amazon.in/TRAIN-19-Arka-Goswami-ebook/dp/B0CH8Z4YW7/ref=sr_1_1?crid=4CQUO7I766QC&dib=eyJ2IjoiMSJ9.sz7kPwvoBAR0PfMANdwzf8Y9IuUj8xkzINH5gH1pgDQ.2Kl-K8LKXSUviBTgjjFVbraFAdx7lA1rxiXcKO2Fqzk&dib_tag=se&keywords=arka+goswami&qid=1717989331&sprefix=arka+goswami%2Caps%2C221&sr=8-1" target="_blank" rel="noreferrer"><FaAmazon /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
