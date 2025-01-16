import React, { useEffect, useState } from 'react';
import './Story.css';
import photo1 from '../../../public/aldi-1.jpeg'; // Ganti dengan gambar Anda
import photo2 from '../../../public/aldi-2.jpeg';
import photo3 from '../../../public/aldi-3.jpeg';

function Story() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="story-container">
      {/* Tracking Scroll Bar */}
      <div
        className="vertical-scroll-tracker"
        style={{ height: `${scrollProgress}%` }}
      ></div>

      <h1 className="story-title">Kisah Cinta</h1>
      <div className="story-card">
        <img src={photo1} alt="Story 1" className="story-image" />
        <div className="story-content">
          <h2>11 November 2024</h2>
          <p>
            Kisah ini bertemu tanpa di duga. Kemudian kami berkenalan dan dekat, hubungan kami berganti status menjadi lebih dari sekadar teman.
          </p>
        </div>
      </div>

      <div className="story-card">
        <img src={photo2} alt="Story 2" className="story-image" />
        <div className="story-content">
          <h2>25 Desember 2024</h2>
          <p>
            Kami mulai berbagi cerita tentang mimpi dan harapan. Waktu berjalan, hubungan kami semakin kuat dengan saling mendukung
            dalam segala hal.
          </p>
        </div>
      </div>

      <div className="story-card">
        <img src={photo3} alt="Story 3" className="story-image" />
        <div className="story-content">
          <h2>1 Februari 2025</h2>
          <p>
            Kami memutuskan untuk melangkah lebih jauh. Dengan doa dan cinta, kami terus membangun kisah kami bersama hingga saat ini.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Story;
