import React from 'react';
import { useParams } from 'react-router-dom';

import './Hero.css';

// eslint-disable-next-line react/prop-types
function Hero({onShowInvitation}) {
  const { guestName } = useParams();

  return (
    <div className="container">
      <div className="hero-content">
        <h1 className="hero-title">The Wedding of</h1>
        <h2 className="hero-subtitle">Elsa Agustina & Aldi Fahrezi </h2>
        <p className="hero-description">
          We invite you to celebrate our wedding
        </p>
        <div className="card">
            <h2 className="dear">Dear Sir/Madam</h2>
            <h1>{guestName}</h1>
            <p>You are cordially invited to our wedding.</p>
            <button onClick={ onShowInvitation }>
  <i className="fas fa-arrow-down" ></i> Open Invitation
</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
