import React from 'react';
import './Time.css';

function Time() {
  return (
    <div className="container-time">
      <h2 className="headings">Wedding Time</h2>
      <div className="times">
        <h1 className="tanggal">01</h1>
        <div>
          <h4>Februari</h4>
          <h4>2025</h4>
        </div>       
      </div>

      <div className="ceremony">
        <h4 className="ceremony-title">Akad</h4>
        <div className="ceremony-detail">
          <div className="ceremony-time">
            <h5>Waktu</h5>
            <h3>09:30 Pagi - Selesai</h3>
          </div>
          <div className="ceremony-date">
            01.02.2025
          </div>
          <div className="ceremony-location">
            Jl. Angkasa Dalam 1 (Di depan Pos Rw.02) Kemayoran, Jakarta Pusat
          </div>
          <a className="button-link" href="https://maps.app.goo.gl/zZQBDy3FDWeJ5Z7NA" target="_blank" rel="noopener noreferrer">
  Open Maps
</a>

        </div>
      </div>

      <div className="reception">
        <h4 className="reception-title">Resepsi</h4>
        <div className="reception-detail">
          <div className="reception-time">
            <h5>Waktu</h5>
            <h3>12:00 Siang - Selesai</h3>
          </div>
          <div className="reception-date">
            01.02.2025
          </div>
          <div className="reception-location">
          Jl. Angkasa Dalam 1 (Di depan Pos Rw.02) Kemayoran, Jakarta Pusat
          </div>
          <a className="button-link" href="https://maps.app.goo.gl/zZQBDy3FDWeJ5Z7NA" target="_blank" rel="noopener noreferrer">
  Open Maps
</a>

        </div>
      </div>
    </div>
  );
}

export default Time;
