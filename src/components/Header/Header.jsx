import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="container-header">
      <div className="">
        <h2 className="">Groom & Bride</h2>
        <p className="header-description">
          Without reducing respect, please allow us to invite you, as well as all your relatives, to attend our wedding
        </p>
        <div className="partner">
        <div className="man">
            <img src="aldi.jpeg" alt="aldi" />
            <h2>Aldi Fahrezi</h2>
            <p>Mr & Mrs Aldi</p>
        </div>
        <div className="women">
            <img src="elsa.jpeg" alt="elsa" />
            <h2>Aulia</h2>
            <p>Mr & Mrs Elsa</p>
        </div>
        </div>
        </div>
      </div>
  );
}

export default Header;
