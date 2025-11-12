import React, { useState, useEffect } from 'react';
import './WeddingSlider.scss';
import slideimage1 from '../../../assets/slide/slide1.jpeg';
import slideimage2 from '../../../assets/slide/slide2.jpeg';

const slides = [
  {
    id: 1,
    image: slideimage1,
    couple: 'Thành Huy & Đan Thảo',
    date: '20 DEC 2025',
  },
  {
    id: 2,
    image: slideimage2,
    couple: 'Thành Huy & Đan Thảo',
    date: '20 DEC 2025',
  },
];

const WeddingSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const text = "WE'RE GETTING MARRIED";

  return (
    <div className="wedding-slider">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        <div className="overlay">
          <h1 className="bride-groom-name">{slides[currentIndex].couple}</h1>
          <h2 className="getting-married">
            {text.split('').map((char, index) => (
              <span
                key={index}
                className="letter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </h2>
        </div>
      </div>

      {/* Nút bấm trái/phải */}
      {/* <button className="prev-btn" onClick={prevSlide}>
        &lt;
      </button>
      <button className="next-btn" onClick={nextSlide}>
        &gt;
      </button> */}

      {/* Ngày cưới */}
      <div className="save-date">
        <p>Save the date</p>
        <span>{slides[currentIndex].date}</span>
      </div>
    </div>
  );
};

export default WeddingSlider;
