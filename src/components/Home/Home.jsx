import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import sampleSong from '../../../public/src/songs.mp3'; // Import file lagu Anda

function Home() {
  const [isPlaying, setIsPlaying] = useState(true); // Default lagu dimainkan
  const [currentBackground, setCurrentBackground] = useState(0); // Indeks background
  const [isTransitioning, setIsTransitioning] = useState(false); // State untuk efek transisi
  const audioRef = useRef(null); // Referensi untuk elemen audio

  // Daftar background
  const backgrounds = [
    '../../../public/aldi-1.jpeg',
    '../../../public/aldi-2.jpeg',
    '../../../public/aldi-3.jpeg',
    '../../../public/aldi-4.jpeg',
    '../../../public/aldi-5.jpeg',
  ];

  // Mengontrol pemutaran lagu saat isPlaying berubah
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Fungsi untuk toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Mengganti background dengan transisi
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // Mulai efek transisi
      setTimeout(() => {
        setCurrentBackground((prev) => (prev + 1) % backgrounds.length); // Ganti gambar
        setIsTransitioning(false); // Akhiri efek transisi
      }, 1000); // Durasi transisi (1 detik)
    }, 5000); // Interval perpindahan (5 detik)
    return () => clearInterval(interval); // Bersihkan interval
  }, [backgrounds.length]);

  return (
    <div className="containers">
      {/* Lapisan transisi */}
      <div
        className={`transition-layer ${isTransitioning ? 'fade-out' : ''}`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.7) 90%), url(${backgrounds[currentBackground]})`,
        }}
      ></div>

      {/* Tombol kontrol lagu */}
      <button
        className="music-control"
        onClick={togglePlayPause}
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          padding: '10px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: 'white',
          fontSize: '1.2rem',
          zIndex: 999,
        }}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>

      {/* Elemen Audio */}
      <audio ref={audioRef} src={sampleSong} loop />

      {/* Konten Utama */}
      <h2 className="subheading">Pernikahan</h2>
      <h1 className="heading">Elsa & Aldi</h1>
      <p className="description">
        Maha Suci Allah SWT yang telah menciptakan mahkluk-Nya berpasang-pasangan.
      </p>
    </div>
  );
}

export default Home;
