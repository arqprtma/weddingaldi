import React from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    'aldi-1.JPG',
    'aldi-4.JPG',
    'aldi-6.JPG',
    'aldi-3.JPG',
    'aldi-2.JPG',
  ];

  return (
    <div className="gallery-container">
    <img className='divider' src="floral.png" alt="" />
      <h2 className="gallery-heading">Our Gallery</h2>
      <div className="gallery-quote">
        <p className="arabic-text">
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ 
          مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </p>
        <p className="translation">
          &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu 
          sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan 
          sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum 
          yang berpikir.&quot;
        </p>
        <h4 className="surah"> Qs. Ar-Rum: 21 </h4>
      </div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
