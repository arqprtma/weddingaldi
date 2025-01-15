import React from 'react';
import './Gift.css';

function Gift() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Berhasil disalin !`);
  };

  return (
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
  );
}

export default Gift;
