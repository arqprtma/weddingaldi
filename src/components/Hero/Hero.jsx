import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="container">
        
      <div className="hero-content">
        <div className="hero-top">
          <img src="building.png" alt="Rumah Gadang" className="hero-image" />
        </div>
        <h1 className="hero-title">The Wedding of</h1>
        <h2 className="hero-subtitle">Aldi Fahrezi & Elsa Fahrezi</h2>
        <p className="hero-description">
          We invite you to celebrate our wedding
        </p>
        <div className="card">
            <h2 className="dear">Dear Sir/Madam</h2>
            <h1>ARIQ PRATAMA</h1>
            <p>You are cordially invited to our wedding.</p>
            <button>
  <i className="fas fa-arrow-down"></i> Open Invitation
</button>

        </div>
      </div>
    </div>
  );
}

export default Hero;
