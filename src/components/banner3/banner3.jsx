import React from 'react';

const Banner3 = () => {
  return (
    <div className="banner-container">
      <div className="banner-image">
        <img src="your-image-url.jpg" alt="Banner Image" />
      </div>
      <div className="banner-title">
        <h1>Your Title Goes Here</h1>
      </div>
      <div className="banner-icons">
        <div className="icon">
          <img src="icon1.png" alt="Icon 1" />
        </div>
        <div className="icon">
          <img src="icon2.png" alt="Icon 2" />
        </div>
        <div className="icon">
          <img src="icon3.png" alt="Icon 3" />
        </div>
        <div className="icon">
          <img src="icon4.png" alt="Icon 4" />
        </div>
        <div className="icon">
          <img src="icon5.png" alt="Icon 5" />
        </div>
        <div className="icon">
          <img src="icon6.png" alt="Icon 6" />
        </div>
      </div>
      <div className="banner-text">
        <p>
          Your descriptive text goes here. This is where you can provide more information about your banner.
        </p>
      </div>
    </div>
  );
};

export default Banner3;
