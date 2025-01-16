import React from 'react';
import { useParams } from 'react-router-dom';

import './Hero.css';

// eslint-disable-next-line react/prop-types
function Hero({onShowInvitation}) {
  const { guestName } = useParams();

  return (
    <div className="container">
      <div className="hero-content">
        <h1 className="hero-title">Pernikahan</h1>
        <h2 className="hero-subtitle">Elsa Agustina & Aldi Fahrezi </h2>
        <p className="hero-description">
        Kami mengundang anda untuk merayakan pernikahan kami
        </p>
        <div className="card">
            <h2 className="dear">Kepada Bapak/Ibu</h2>
            <h1>{guestName}</h1>
            <p>Mohon maaf apabila ada kesalahan nama / gelar</p>
            <button onClick={ onShowInvitation }>
  <i className="fas fa-arrow-down" ></i> Buka Undangan
</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
