import React from 'react';
import groomsmenImg1 from '../../../../assets/wedding2/images/groomsmen/img-1.jpg';
import groomsmenImg2 from '../../../../assets/wedding2/images/groomsmen/img-2.jpg';
import groomsmenImg3 from '../../../../assets/wedding2/images/groomsmen/img-3.jpg';
import groomsmenImg4 from '../../../../assets/wedding2/images/groomsmen/img-4.jpg';
import groomsmenImg5 from '../../../../assets/wedding2/images/groomsmen/img-5.jpg';
import groomsmenImg6 from '../../../../assets/wedding2/images/groomsmen/img-6.jpg';
import bridesmaidImg1 from '../../../../assets/wedding2/images/bridesmaid/img-1.jpg';
import bridesmaidImg2 from '../../../../assets/wedding2/images/bridesmaid/img-2.jpg';
import bridesmaidImg3 from '../../../../assets/wedding2/images/bridesmaid/img-3.jpg';
import bridesmaidImg4 from '../../../../assets/wedding2/images/bridesmaid/img-4.jpg';
import bridesmaidImg5 from '../../../../assets/wedding2/images/bridesmaid/img-5.jpg';
import bridesmaidImg6 from '../../../../assets/wedding2/images/bridesmaid/img-6.jpg';

const People: React.FC = () => {
  return (
    <section className="inportant-people-section section-padding" id="people">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="section-title">
              <div className="vertical-line">
                <span>
                  <i className="fi flaticon-two"></i>
                </span>
              </div>
              <h2>Groomsmen &amp; Bridesmaid</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col col-xs-12">
            <div className="inportant-people-content">
              <div className="tablist">
                <ul className="nav">
                  <li className="active">
                    <a href="#groomsmen" data-toggle="tab">Groomsmen</a>
                  </li>
                  <li>
                    <a href="#bridesmaid" data-toggle="tab">Bridesmaid</a>
                  </li>
                </ul>
              </div>

              <div className="tab-content">
                <div className="tab-pane fade in active grid-wrapper" id="groomsmen">
                  <div className="grid">
                    <div className="img-holder">
                      <a href={groomsmenImg1} className="popup-image">
                        <img src={groomsmenImg1} alt="Jhon Michel" className="img img-responsive" />
                      </a>
                    </div>
                    <div className="details">
                      <h3>Jhon Michel</h3>
                      <span>Best man</span>
                      <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="img-holder">
                      <a href={groomsmenImg2} className="popup-image">
                        <img src={groomsmenImg2} alt="Chasmoos jhon" className="img img-responsive" />
                      </a>
                    </div>
                    <div className="details">
                      <h3>Chasmoos jhon</h3>
                      <span>Best friend</span>
                      <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="img-holder">
                      <a href={groomsmenImg3} className="popup-image">
                        <img src={groomsmenImg3} alt="Kaiste pate" className="img img-responsive" />
                      </a>
                    </div>
                    <div className="details">
                      <h3>Kaiste pate</h3>
                      <span>Friend</span>
                      <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="img-holder">
                      <a href={groomsmenImg4} className="popup-image">
                        <img src={groomsmenImg4} alt="Hatu Michel" className="img img-responsive" />
                      </a>
                    </div>
                    <div className="details">
                      <h3>Hatu Michel</h3>
                      <span>Friend</span>
                      <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="img-holder">
                      <a href={groomsmenImg5} className="popup-image">
                        <img src={groomsmenImg5} alt="Michel doin" className="img img-responsive" />
                      </a>
                    </div>
                    <div className="details">
                      <h3>Michel doin</h3>
                      <span>Friend</span>
                      <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="img-holder">
                      <a href={groomsmenImg6} className="popup-image">
                        <img src={groomsmenImg6} alt="Topper jone" className="img img-responsive" />
                      </a>
                    </div>
                    <div className="details">
                      <h3>Topper jone</h3>
                      <span>Friend</span>
                      <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade grid-wrapper" id="bridesmaid">
                  <div className="grid">
                    <div className="img-holder">
                      <a href={bridesmaidImg1} className="popup-image">
                        <img src={bridesmaidImg1} alt="Rachel Li" className="img img-responsive" />
                      </a>
                    </div>
                    <div className="details">
                      <h3>Rachel Li</h3>
                      <span>Made of honor</span>
                      <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="img-holder">
                      <a href={bridesmaidImg2} className="popup-image">
                        <img src={bridesmaidImg2} alt="Male Vign" className="img img-responsive" />
                      </a>
                    </div>
                    <div className="details">
                      <h3>Male Vign</h3>
                      <span>Best friend</span>
                      <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="img-holder">
                      <a href={bridesmaidImg3} className="popup-image">
                        <img src={bridesmaidImg3} alt="Jonny Mich" className="img img-responsive" />
                      </a>
                    </div>
                    <div className="details">
                      <h3>Jonny Mich</h3>
                      <span>Friend</span>
                      <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="img-holder">
                      <a href={bridesmaidImg4} className="popup-image">
                        <img src={bridesmaidImg4} alt="Brodd Wid" className="img img-responsive" />
                      </a>
                    </div>
                    <div className="details">
                      <h3>Brodd Wid</h3>
                      <span>Friend</span>
                      <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="img-holder">
                      <a href={bridesmaidImg5} className="popup-image">
                        <img src={bridesmaidImg5} alt="Nokshal bedi" className="img img-responsive" />
                      </a>
                    </div>
                    <div className="details">
                      <h3>Nokshal bedi</h3>
                      <span>Friend</span>
                      <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="img-holder">
                      <a href={bridesmaidImg6} className="popup-image">
                        <img src={bridesmaidImg6} alt="Holly Fie" className="img img-responsive" />
                      </a>
                    </div>
                    <div className="details">
                      <h3>Holly Fie</h3>
                      <span>Friend</span>
                      <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                      </ul>
                    </div>
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

export default People;
