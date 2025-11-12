import React from 'react';

const GettingThere: React.FC = () => {
  return (
    <section className="getting-there-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="section-title-white">
              <div className="vertical-line">
                <span>
                  <i className="fi flaticon-two"></i>
                </span>
              </div>
              <h2>Getting there</h2>
            </div>
          </div>
        </div>

        <div className="row content">
          <div className="col col-md-6">
            <h3>Transportation</h3>
            <p>Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
          </div>
          <div className="col col-md-6">
            <h3>Accommodations</h3>
            <p>Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingThere;
