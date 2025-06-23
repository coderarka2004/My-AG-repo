// src/components/Contact.jsx
import '../styles/Contact.css';
import '../styles/SharedSection.css';
import { useState, useEffect, useRef } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setIsVisible(true);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_2hsmmno',         // ✅ Replace with your EmailJS service ID
      'template_5vdw11c',        // ✅ Replace with your EmailJS template ID
      formRef.current,
      'kRoxbP7QjZ867TKy6'        // ✅ Replace with your EmailJS public key
    ).then(() => {
      toast.success('📩 Message Sent Successfully!');
      formRef.current.reset();
    }).catch(() => {
      toast.error('❌ Failed to send message. Try again.');
    });
  };

  return (
    <section id="contact" className={`contact shared-section ${isVisible ? 'slide-in' : ''}`}>
      <h2 className="section-title">📬 Get In Touch</h2>
      <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
        <div className="form-group">
          <FaUser className="input-icon" />
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <FaEnvelope className="input-icon" />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <FaCommentDots className="input-icon" />
          <textarea name="message" placeholder="Your Message" required></textarea>
        </div>
        <button className="contact-button" type="submit">
          <FaTelegramPlane style={{ marginRight: '8px' }} /> Send Message
        </button>
      </form>

      <div className="contact-info">
        <p><FaPhoneAlt /> +91 62907 06150</p>
        <p><FaEnvelope /> arkagoswami41@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;
