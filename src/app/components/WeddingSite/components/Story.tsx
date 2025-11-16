import React from 'react';
import './Story.scss';
import storyImg1 from '../../../../assets/wedding2/images/story/img-1.jpg';
import storyImg2 from '../../../../assets/wedding2/images/story/img-2.jpg';
import storyImg3 from '../../../../assets/wedding2/images/story/img-3.jpg';
import storyImg7 from '../../../../assets/wedding2/images/story/img-7.jpg';
import storyImg5 from '../../../../assets/wedding2/images/story/img-5.jpg';
import storyImg8 from '../../../../assets/wedding2/images/story/img-8.jpg';

const Story: React.FC = () => {
  return (
    <section className="story-section section-padding" id="story">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="section-title">
              <div className="vertical-line">
                <span>
                  <i className="fas fa-heart"></i>
                </span>
              </div>
              <h2>Our love story</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col col-xs-12">
            <div className="story-timeline">
              <div className="row">
                <div className="col col-md-6">
                  <div className="story-text right-align-text">
                    <h3>First meet</h3>
                    <span className="date">Jan 12 2017</span>
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,</p>
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="img-holder">
                    <img src={storyImg1} alt="First Meet" className="img img-responsive" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-6">
                  <div className="img-holder right-align-text story-slider">
                    <img src={storyImg2} alt="First Date" className="img img-responsive" />
                    <img src={storyImg3} alt="First Date 2" className="img img-responsive" />
                  </div>
                </div>
                <div className="col col-md-6 text-holder">
                  <span className="heart">
                    <i className="fa fa-heart"></i>
                  </span>
                  <div className="story-text">
                    <h3>First date</h3>
                    <span className="date">Feb 14 2017</span>
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-6 text-holder right-heart">
                  <span className="heart">
                    <i className="fa fa-heart"></i>
                  </span>
                  <div className="story-text right-align-text">
                    <h3>Proposal</h3>
                    <span className="date">Apr 14 2017</span>
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,</p>
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="img-holder right-align-text story-slider">
                    <img src={storyImg7} alt="Proposal" className="img img-responsive" />
                    <img src={storyImg5} alt="Proposal 2" className="img img-responsive" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-6">
                  <div className="img-holder video-holder">
                    <img src={storyImg8} alt="Engagement" className="img img-responsive" />
                    <a href="https://www.youtube.com/embed/XSGBVzeBUbk?autoplay=1" data-type="iframe" className="video-play-btn">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                </div>
                <div className="col col-md-6 text-holder">
                  <span className="heart">
                    <i className="fa fa-heart"></i>
                  </span>
                  <div className="story-text">
                    <h3>Engagement</h3>
                    <span className="date">Jul 14 2017</span>
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
