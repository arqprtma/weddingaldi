import React, { useState, useEffect } from 'react';
import './Countdown.css';

function Countdown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-02-01T00:00:00");
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <h1>Countdown to Our Special Day</h1>
      <img src="" alt="" />
      <div className="countdown-timer">
        <div className="time-box">
          <span>{timeLeft.days || 0}</span>
          <p>Hari</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.hours || 0}</span>
          <p>Jam</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.minutes || 0}</span>
          <p>Menit</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.seconds || 0}</span>
          <p>Detik</p>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
