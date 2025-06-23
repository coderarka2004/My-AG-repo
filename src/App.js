// src/App.jsx
import './App.css';
import Navbar from './components/Navbar';
import TrainStrip from './components/TrainStrip'; // ✅ Train message strip
import Header from './components/Header';
import About from './components/About';
import Previous from './components/Previous';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Gallery from './components/Gallery'; // ✅ Gallery section
import Contact from './components/Contact';
import Footer from './components/Footer';
import VantaBackground from './components/VantaBackground'; // ✅ Background
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      {/* 🌌 3D Background (Vanta.js) */}
      <VantaBackground />

      {/* 🔝 Top Navbar */}
      <Navbar />

      {/* 🚆 Moving Train Strip */}
      <TrainStrip />

      {/* 🧑‍💻 Header Section */}
      <Header />

      {/* 📚 About, Past Projects, Skills */}
      <About />
      <Previous />
      <Projects />
      <Skills />

      {/* 🖼️ New Gallery Section */}
      <Gallery />

      {/* 📬 Contact & Footer */}
      <Contact />
      <Footer />

      {/* 🔔 Notifications */}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
}

export default App;
