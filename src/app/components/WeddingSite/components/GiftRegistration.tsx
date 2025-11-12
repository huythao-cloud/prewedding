import React from 'react';
import giftImg1 from '../../../../assets/wedding2/images/gift/img-1.jpg';
import giftImg2 from '../../../../assets/wedding2/images/gift/img-2.jpg';
import giftImg3 from '../../../../assets/wedding2/images/gift/img-3.jpg';

const GiftRegistration: React.FC = () => {
  return (
    <section className="gift-registration-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="section-title">
              <div className="vertical-line">
                <span>
                  <i className="fi flaticon-two"></i>
                </span>
              </div>
              <h2>Gift registration</h2>
            </div>
          </div>
        </div>

        <div className="row content">
          <div className="col col-lg-10 col-lg-offset-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, cupiditate, repudiandae. A ab sit laboriosam quis distinctio dignissimos, nemo cum sed hic, deleniti maiores rem iste labore commodi perferendis cumque.repudiandae. A ab sit laboriosam quis distinctio dignissimos, nemo cum sed hic.</p>

            <div className="gif-registration-slider">
              <div className="register">
                <img src={giftImg1} alt="Gift 1" className="img img-responsive" />
              </div>
              <div className="register">
                <img src={giftImg2} alt="Gift 2" className="img img-responsive" />
              </div>
              <div className="register">
                <img src={giftImg3} alt="Gift 3" className="img img-responsive" />
              </div>
              <div className="register">
                <img src={giftImg1} alt="Gift 1" className="img img-responsive" />
              </div>
              <div className="register">
                <img src={giftImg2} alt="Gift 2" className="img img-responsive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftRegistration;
