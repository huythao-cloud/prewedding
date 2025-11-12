import React, { useState } from 'react';
import './LoveStory.scss';
import lovestory1 from '../../../assets/lovestory/lovestory1.jpeg';
import lovestory2 from '../../../assets/lovestory/lovestory2.jpeg';
import lovestory3 from '../../../assets/lovestory/lovestory3.jpeg';
import lovestory4 from '../../../assets/lovestory/lovestory4.jpeg';
import lovestory5 from '../../../assets/lovestory/lovestory5.jpeg';
import lovestory6 from '../../../assets/lovestory/lovestory6.jpg';
import lovestory7 from '../../../assets/lovestory/lovestory7.jpeg';
import lovestory8 from '../../../assets/lovestory/lovestory8.jpeg';

interface ImageData {
  src: string;
  title: string;
  highlight: string;
  description: string;
}

const images: ImageData[] = [
  {
    src: lovestory1,
    title: 'Our First',
    highlight: 'Kiss',
    description: 'The magical moment when our lips met for the first time.',
  },
  {
    src: lovestory2,
    title: 'Romantic First',
    highlight: 'Date',
    description: 'An unforgettable night filled with love and laughter.',
  },
  {
    src: lovestory3,
    title: 'Vacation',
    highlight: 'Adventures',
    description: 'Creating beautiful memories in new places together.',
  },
  {
    src: lovestory4,
    title: 'Beautiful',
    highlight: 'Soul',
    description: 'Seeing the beauty in each other’s hearts and souls.',
  },
  {
    src: lovestory5,
    title: 'Lovely',
    highlight: 'Rosie',
    description: 'Cherishing the sweet moments with our precious Rosie.',
  },
  {
    src: lovestory6,
    title: 'Soul',
    highlight: 'Mates',
    description: 'Two hearts connected forever, destined to be together.',
  },
  {
    src: lovestory7,
    title: 'Travel',
    highlight: 'Together',
    description: 'Exploring the world, hand in hand, step by step.',
  },
  {
    src: lovestory8,
    title: 'Wedding',
    highlight: 'Rings',
    description: 'A symbol of our eternal love and commitment.',
  },
];

const LoveStory: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <div className="gallery-section">
      {/* Tiêu đề */}
      <div className="gallery-title">
        <h2>
          MEMORIES <span>for</span> CENTURIES
        </h2>
        <p>Love is composed of a single soul inhabiting two bodies.</p>
      </div>

      {/* Grid ảnh */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="image-card"
            style={{ backgroundImage: `url(${img.src})` }}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="overlay">
              <h3>
                {img.title} <span>{img.highlight}</span>
              </h3>
              <p>{img.description}</p>
              <button className="details-btn">DETAILS</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal xem ảnh */}
      {selectedIndex !== null && (
        <div className="gallery-overlay" onClick={() => setSelectedIndex(null)}>
          <button className="close-btn" onClick={() => setSelectedIndex(null)}>
            ✕
          </button>
          <button className="nav-btn left" onClick={handlePrev}>
            ‹
          </button>
          <img
            src={images[selectedIndex].src}
            alt="Gallery"
            className="gallery-image"
          />
          <button className="nav-btn right" onClick={handleNext}>
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default LoveStory;
