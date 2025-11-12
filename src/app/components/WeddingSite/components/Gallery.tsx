import React from 'react';
import galleryImg1 from '../../../../assets/wedding2/images/gallery/img-1.jpg';
import galleryImg2 from '../../../../assets/wedding2/images/gallery/img-2.jpg';
import galleryImg3 from '../../../../assets/wedding2/images/gallery/img-3.jpg';
import galleryImg4 from '../../../../assets/wedding2/images/gallery/img-4.jpg';
import galleryImg5 from '../../../../assets/wedding2/images/gallery/img-5.jpg';
import galleryImg6 from '../../../../assets/wedding2/images/gallery/img-6.jpg';
import galleryImg7 from '../../../../assets/wedding2/images/gallery/img-7.jpg';
import galleryImg8 from '../../../../assets/wedding2/images/gallery/img-8.jpg';
import galleryImg9 from '../../../../assets/wedding2/images/gallery/img-9.jpg';

const Gallery: React.FC = () => {
  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="section-title">
              <div className="vertical-line">
                <span>
                  <i className="fi flaticon-two"></i>
                </span>
              </div>
              <h2>Our gallery</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col col-xs-12 sortable-gallery">
            <div className="gallery-filters">
              <ul>
                <li><a data-filter="*" href="#" className="current">All</a></li>
                <li><a data-filter=".wedding" href="#">Wedding</a></li>
                <li><a data-filter=".ceremony" href="#">Ceremony</a></li>
                <li><a data-filter=".party" href="#">Party</a></li>
              </ul>
            </div>

            <div className="gallery-container gallery-fancybox masonry-gallery">
              <div className="grid wedding">
                <a href={galleryImg1} className="fancybox" data-fancybox-group="gall-1">
                  <img src={galleryImg1} alt="Gallery 1" className="img img-responsive" />
                </a>
              </div>
              <div className="grid wedding ceremony">
                <a href={galleryImg2} className="fancybox" data-fancybox-group="gall-1">
                  <img src={galleryImg2} alt="Gallery 2" className="img img-responsive" />
                </a>
              </div>
              <div className="grid ceremony">
                <a href={galleryImg3} className="fancybox" data-fancybox-group="gall-1">
                  <img src={galleryImg3} alt="Gallery 3" className="img img-responsive" />
                </a>
              </div>
              <div className="grid wedding party">
                <a href={galleryImg4} className="fancybox" data-fancybox-group="gall-1">
                  <img src={galleryImg4} alt="Gallery 4" className="img img-responsive" />
                </a>
              </div>
              <div className="grid ceremony">
                <a href={galleryImg5} className="fancybox" data-fancybox-group="gall-1">
                  <img src={galleryImg5} alt="Gallery 5" className="img img-responsive" />
                </a>
              </div>
              <div className="grid party">
                <a href={galleryImg6} className="fancybox" data-fancybox-group="gall-1">
                  <img src={galleryImg6} alt="Gallery 6" className="img img-responsive" />
                </a>
              </div>
              <div className="grid wedding">
                <a href={galleryImg7} className="fancybox" data-fancybox-group="gall-1">
                  <img src={galleryImg7} alt="Gallery 7" className="img img-responsive" />
                </a>
              </div>
              <div className="grid ceremony">
                <a href="https://www.youtube.com/embed/XSGBVzeBUbk?autoplay=1" data-type="iframe" className="video-play-btn">
                  <img src={galleryImg8} alt="Gallery 8" className="img img-responsive" />
                  <i className="fa fa-play"></i>
                </a>
              </div>
              <div className="grid ceremony">
                <a href={galleryImg9} className="fancybox" data-fancybox-group="gall-1">
                  <img src={galleryImg9} alt="Gallery 9" className="img img-responsive" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
