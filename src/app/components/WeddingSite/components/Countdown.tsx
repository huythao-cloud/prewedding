import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to December 20, 2025
    const targetDate = new Date('2025-12-20T00:00:00');

    const updateClock = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="count-down-section section-padding parallax" data-bg-image="images/countdown-bg.jpg" data-speed="7">
      <div className="container">
        <div className="row">
          <div className="col col-md-4">
            <h2><span>We are waiting for.....</span> The adventure</h2>
          </div>
          <div className="col col-md-7 col-md-offset-1">
            <div className="count-down-clock">
              <div id="clock">
                <div className="box">
                  <div className="date">{timeLeft.days}</div>
                  <span>Days</span>
                </div>
                <div className="box">
                  <div className="date">{timeLeft.hours}</div>
                  <span>Hours</span>
                </div>
                <div className="box">
                  <div className="date">{timeLeft.minutes}</div>
                  <span>Mins</span>
                </div>
                <div className="box">
                  <div className="date">{timeLeft.seconds}</div>
                  <span>Secs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
