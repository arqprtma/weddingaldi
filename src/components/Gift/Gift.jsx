import React from 'react';
import './Gift.css';

function Gift() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Berhasil disalin !`);
  };

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#490d1d" fillOpacity="1" d="M0,192L48,202.7C96,213,192,235,288,245.3C384,256,480,256,576,218.7C672,181,768,107,864,101.3C960,96,1056,160,1152,170.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <div className="gift-container">
        
      <h2 className="gift-heading">Wedding Gift</h2>
      <p className="gift-description">
        Your Prayer of Blessing is a very meaningful gift to us. And if giving is an expression of your love, you can give a gift by sending a digital envelope.
      </p>
      <div className="account-info">
        <h3 className="bank-name">Bank BSI</h3>
        <p className="account-number">7207539826</p>
        <p className="account-holder">Aldi Fahrezi</p>
        <button
          className="copy-button"
          onClick={() => copyToClipboard('7207539826')}
        >
          Copy Number
        </button>
      </div>
      <div className="account-info">
        <h3 className="bank-name">Bank BCA</h3>
        <p className="account-number">4740807779</p>
        <p className="account-holder">Elsa Agustina</p>
        <button
          className="copy-button"
          onClick={() => copyToClipboard('4740807779')}
        >
          Copy Number
        </button>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#490d1d" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,160C672,171,768,213,864,202.7C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </>
  );
}

export default Gift;
