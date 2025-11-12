import React from 'react';
import './BrideGroom.scss';
import TheGroom from '../../../assets/bridegroom/TheGroom.jpeg';
import TheBride from '../../../assets/bridegroom/TheBride.jpeg';

const BrideGroom = () => {
    return (
      <div className="bride-groom">
        {/* GROOM */}
        <div className="card groom">
          <div className="image">
            <img src={TheGroom} alt="The Groom" />
          </div>
          <div className="content">
            <h3>THE GROOM</h3>
            <p>
              I am Thành Huy, a man who appreciates art and elegance. From simple 
              moments to big dreams, I believe that love is the most beautiful thing 
              life has to offer. This journey became complete when I met Đan Thảo – 
              the one who turns every day into a beautiful story.
            </p>
            <p className="signature">— Thành Huy</p>
          </div>
        </div>
  
        {/* BRIDE */}
        <div className="card bride">
          <div className="image">
            <img src={TheBride} alt="The Bride" />
          </div>
          <div className="content">
            <h3>THE BRIDE</h3>
            <p>
              I am Đan Thảo, a girl who loves romance and cherishes the little meaningful 
              things in life. To me, happiness is not just about dazzling moments but also 
              about a lasting companionship. Meeting Thành Huy was the most wonderful 
              thing because he is the perfect missing piece in the story of my life.
            </p>
            <p className="signature">— Đan Thảo</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default BrideGroom;
