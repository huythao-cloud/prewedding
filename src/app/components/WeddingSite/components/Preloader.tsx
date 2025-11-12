import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <div className="inner">
        <span className="icon"><i className="fas fa-spinner fa-spin"></i></span>
      </div>
    </div>
  );
};

export default Preloader;
