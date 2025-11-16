import React, { useEffect } from 'react';
import './WeddingSite.scss';

// Import components
import Preloader from './components/Preloader';
import MusicBox from './components/MusicBox';
import Hero from './components/Hero';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Story from './components/Story';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WeddingCouple from './components/WeddingCouple';

const WeddingSite: React.FC = () => {
  // Removed jQuery loading since we're not using it anymore

  return (
    <div className="page-wrapper">
      <Preloader />
      <MusicBox />
      <Hero />
      <Header />
      <WeddingCouple />
      <Countdown />
      <Story />
      <Events />
      <Gallery />
      <Footer />
    </div>
  );
};

export default WeddingSite;
