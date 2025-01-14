import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="containers">
      <h2 className="subheading">THE WEDDING OF</h2>
      <h1 className="heading">Aldi Fahrezi & Elsa Fahrezi</h1>
      <p className="description">We&apos;re getting married, and we want you to be a part of our special day</p>
      <div className="image-container">
        <img className="image" src="aldi-5.JPG" alt="Groom & Bride" />
      </div>
    </div>
  );
}

export default Home;
