import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import sampleSong from '../../../public/songs.mp3'; // Import file lagu Anda

function Home() {
  const [isPlaying, setIsPlaying] = useState(true); // Default lagu dimainkan
  const audioRef = useRef(null); // Referensi untuk elemen audio

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

  return (
    <div className="containers">
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
      <h2 className="subheading">THE WEDDING OF</h2>
      <h1 className="heading">Elsa & Aldi</h1>
      <p className="description">
        We&apos;re getting married, and we want you to be a part of our special day
      </p>
    </div>
  );
}

export default Home;
