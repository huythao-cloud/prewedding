import React from 'react';
import './WeddingCouple.scss';
import groomImg from '../../../../assets/bridegroom/TheGroom.jpeg';
import brideImg from '../../../../assets/bridegroom/TheBride.jpeg';

const WeddingCouple: React.FC = () => {
  return (
    <section className="wedding-couple-section section-padding" id="couple">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="gb groom">
              <div className="img-holder wow fadeInLeftSlow">
                <img src={groomImg} alt="The Groom" />
              </div>
              <div className="details">
                <div className="details-inner">
                  <h3>The Groom</h3>
                  <p>Hi I am Huy, a passionate software engineer with a love for creating beautiful and functional web applications. I enjoy coding, problem-solving, and bringing ideas to life through technology.</p>
                  <span className="signature">Huy</span>
                </div>
              </div>
            </div>
            <div className="gb bride">
              <div className="details">
                <div className="details-inner">
                  <h3>The Bride</h3>
                  <p>Hi I am Thanh, a creative designer who loves bringing beauty and elegance to every project. I enjoy crafting visual experiences that tell stories and connect with people on an emotional level.</p>
                  <span className="signature">Thanh</span>
                </div>
              </div>
              <div className="img-holder wow fadeInRightSlow">
                <img src={brideImg} alt="The Bride" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingCouple;
