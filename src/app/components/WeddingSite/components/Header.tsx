import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="header" className="site-header header-style-1">
      <nav className="navigation navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="open-btn">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="couple-logo">
              <h1>
                <a href="#home">H <i className="fas fa-heart"></i> T</a>
              </h1>
            </div>
          </div>
          <div id="navbar" className="navbar-collapse collapse navbar-right navigation-holder">
            <button className="close-navbar">
              <i className="fa fa-close"></i>
            </button>
            <ul className="nav navbar-nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#couple">Couple</a></li>
              <li><a href="#story">Story</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
