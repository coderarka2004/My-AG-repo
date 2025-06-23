import { useEffect, useState } from 'react';
import '../styles/PreviousWebsite.css';
import '../styles/SharedSection.css';


const Previous = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('previous');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const inView = rect.top < window.innerHeight - 100 && rect.bottom >= 100;
      setIsVisible(inView);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="previous" className={`previous ${isVisible ? 'visible' : ''}`}>
      <h2>🌐 My Previous Website</h2>
      <p>
        <span className="hover-label" data-tooltip="My oldest website built using HTML, CSS & JavaScript">
          🔗 Check it here:
        </span>{' '}
        <a
          href="https://coderarka2004.github.io/My-AG-portfolio"
          target="_blank"
          rel="noreferrer"
          className="previous-link"
        >
          My Previous Portfolio
        </a>
      </p>
    </section>
  );
};

export default Previous;
