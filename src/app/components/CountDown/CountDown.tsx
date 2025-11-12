import React, { useState, useEffect } from "react";
import "./Countdown.scss";

const Countdown = () => {
  const weddingDate = new Date("2025-12-20T00:00:00").getTime(); // Ngày cưới

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
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
      <div className="text">
        <p>We are waiting for…</p>
        <h2>The adventure</h2>
      </div>
      <div className="timer">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="time-box">
            <span className="number">{value.toString().padStart(2, "0")}</span>
            <span className="label">{unit.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
