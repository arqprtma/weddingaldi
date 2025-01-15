import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
      {/* Wave SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="wave-svg"
      >
        <path
          fill="#4D0D1E"
          fillOpacity="1"
          d="M0,96L80,90.7C160,85,320,75,480,90.7C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      {/* Container Header */}
      <div className="container-header">
        <h2 className="title-arab">ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ</h2>
        <p className="header-description">
          Without reducing respect, please allow us to invite you, as well as
          all your relatives, to attend our wedding.
        </p>

        {/* Partner Section */}
        <div className="partner">
          {/* Bride */}
          <div className="woman">
            <img src="elsa.jpeg" alt="Elsa" className="partner-img" />
            <h2 className="partner-name">Elsa Agustina</h2>
            <p className="partner-parent">The third daughter of Mr. Zubir Ilyas and Mrs. Erlinda.
            </p>
          </div>
            {/* Groom */}
            <div className="man">
            <img src="aldi.jpeg" alt="Aldi" className="partner-img" />
            <h2 className="partner-name">Aldi Fahrezi</h2>
            <p className="partner-parent">The first son of Mr. Kurnia and Mrs. Sri Utami.</p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4D0D1E" fill-opacity="1" d="M0,320L120,304C240,288,480,256,720,256C960,256,1200,288,1320,304L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    </>
  );
}

export default Header;
