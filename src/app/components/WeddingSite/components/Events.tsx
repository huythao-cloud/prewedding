import React from 'react';
import eventsImg1 from '../../../../assets/wedding2/images/events/img-1.jpg';
import eventsImg2 from '../../../../assets/wedding2/images/events/img-2.jpg';

const Events: React.FC = () => {
  return (
    <section className="events-section section-padding" id="events">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="section-title">
              <div className="vertical-line">
                <span>
                  <i className="fas fa-calendar-alt"></i>
                </span>
              </div>
              <h2>Wedding events</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col col-lg-10 col-lg-offset-1">
            <div className="event">
              <div className="img-holder">
                <img src={eventsImg1} alt="The Reception" className="img img-responsive" />
              </div>
              <div className="details">
                <h3>The reception</h3>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> 32 big bro road, Chanpai, London.
                  </li>
                  <li>
                    <i className="fas fa-clock"></i> Nov 25 2017, 9AM - 5PM
                  </li>
                </ul>
                <p>
                  When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <a
                  className="see-location-btn popup-gmaps"
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25211.21212385712!2d144.95275648773628!3d-37.82748510398018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2zTWVsYm91cm5lIFZJQyAzMDA0LCDgpoXgprjgp43gpp_gp43gprDgp4fgprLgpr_gpq_gprzgpr4!5e0!3m2!1sbn!2sbd!4v1503742051881"
                >
                  See location <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="event">
              <div className="img-holder">
                <img src={eventsImg2} alt="Wedding Party" className="img img-responsive" />
              </div>
              <div className="details">
                <h3>Wedding party</h3>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> 32 big bro road, Chanpai, London.
                  </li>
                  <li>
                    <i className="fas fa-clock"></i> Nov 25 2017, 9AM - 5PM
                  </li>
                </ul>
                <p>
                  When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <a
                  className="see-location-btn popup-gmaps"
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.0160484383277!2d144.99053291585201!3d-37.81309307975254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642ef89a7e023%3A0xb1353055e38c1ab8!2sNew+York+Tomato+Cafe!5e0!3m2!1sbn!2sbd!4v1503743893919"
                >
                  See location <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
