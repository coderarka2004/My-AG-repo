import React from 'react';
import '../styles/Gallery.css';

// 🖼️ Import all image files
import img1 from '../assets/gallery/img1.jpg';
import img2 from '../assets/gallery/img2.jpg';
import img3 from '../assets/gallery/img3.jpg';
import img4 from '../assets/gallery/img4.jpg';
import img5 from '../assets/gallery/img5.jpg';
import img6 from '../assets/gallery/img6.jpg';
import img7 from '../assets/gallery/img7.jpg';
import img8 from '../assets/gallery/img8.jpg';
import img9 from '../assets/gallery/img9.jpg';
import img10 from '../assets/gallery/img10.jpg';
import img11 from '../assets/gallery/img11.jpg';
import img12 from '../assets/gallery/img12.jpg';
import img13 from '../assets/gallery/img13.jpg';
import img14 from '../assets/gallery/img14.jpg';

// 🎞️ Import all video files
import videoA from '../assets/gallery/a.mp4';
import videoB from '../assets/gallery/b.mp4';
import videoC from '../assets/gallery/c.mp4';
import videoD from '../assets/gallery/d.mp4';

// 🧠 Media Data Array
const mediaItems = [
  { type: 'image', src: img1, caption: "Training At BKTPS" },
  { type: 'image', src: img2, caption: "GT at BKTPP" },
  { type: 'image', src: img3, caption: "TRANSFORMERS at BKTPP" },
  { type: 'video', src: videoA, caption: "CHP Tour (Video A)" },
  { type: 'image', src: img4, caption: "Turbine Floor" },
  { type: 'image', src: img5, caption: "Generator Panel" },
  { type: 'image', src: img6, caption: "Control Room" },
  { type: 'image', src: img7, caption: "DCS System" },
  { type: 'image', src: img8, caption: "Cooling Tower" },
  { type: 'image', src: img9, caption: "Switchyard" },
  { type: 'image', src: img10, caption: "Panel Board" },
  { type: 'image', src: img11, caption: "Excitation Unit" },
  { type: 'image', src: img12, caption: "BFP" },
  { type: 'image', src: img13, caption: "Transformers Overview" },
  { type: 'image', src: img14, caption: "CHP Section" },
  { type: 'video', src: videoB, caption: "BOBR wagon discharging" },
  { type: 'video', src: videoC, caption: "Inverter" },
  { type: 'video', src: videoD, caption: "Switchyard Monitoring (Video D)" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-title">📸 My Project & Training Gallery</h2>
      <div className="gallery-grid">
        {mediaItems.map((item, idx) => (
          <div className="gallery-item" key={idx}>
            {item.type === 'image' ? (
              <img src={item.src} alt={`Gallery ${idx + 1}`} />
            ) : (
              <video controls width="100%" height="auto">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p>{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
