import React, { useState, useEffect } from 'react';
import './Hero.scss';
import slide1 from '../../../../assets/slide/slide1.jpg';
import slide2 from '../../../../assets/slide/slide2.jpg';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = [slide1, slide2];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleButtonClick = (action: 'next' | 'prev') => {
    if (action === 'next') {
      handleNextSlide();
    } else {
      handlePrevSlide();
    }
  };

  // Remove duplicate functions

  return (
    <section className="hero">
      <div className="hero-slider">
        <div
          className="slide-item"
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
            transition: isTransitioning ? 'opacity 0.5s ease-in-out' : 'none',
            opacity: isTransitioning ? 0.7 : 1
          }}
        >
        </div>

      </div>
      <div className="wedding-announcement">
        {/* <div className="couple-name-merried-text">
          <h2 className="wow slideInUp">Suntina &amp; Famico</h2>
          <div className="married-text wow fadeIn">
            <h4>
              <span className="wow fadeInUp">W</span>
              <span className="wow fadeInUp">e</span>
              <span className="wow fadeInUp">'</span>
              <span className="wow fadeInUp">r</span>
              <span className="wow fadeInUp">e</span>
              <span>&nbsp;</span>
              <span className="wow fadeInUp">g</span>
              <span className="wow fadeInUp">e</span>
              <span className="wow fadeInUp">t</span>
              <span className="wow fadeInUp">t</span>
              <span className="wow fadeInUp">i</span>
              <span className="wow fadeInUp">n</span>
              <span className="wow fadeInUp">g</span>
              <span>&nbsp;</span>
              <span className="wow fadeInUp">m</span>
              <span className="wow fadeInUp">a</span>
              <span className="wow fadeInUp">r</span>
              <span className="wow fadeInUp">r</span>
              <span className="wow fadeInUp">i</span>
              <span className="wow fadeInUp">e</span>
              <span className="wow fadeInUp">d</span>
            </h4>
          </div>
        </div> */}
        <div className="save-the-date">
          <h4>Save the date</h4>
          <span className="date">25 DEC 2017</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
