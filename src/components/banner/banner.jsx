import React from 'react';
import './Banner.css'; // Import your CSS file for styling
import Image from '../../assets/01 (2).jpg'

const Banner = () => {
  return (
    <div className="banner">
      <img
        className="banner-image"
        src={Image} 
        alt="Banner Image" 
      />
      <div className="banner-content">
        <h1 className="banner-title">Style, Fitness,</h1>
        <h1 className="banner-title1">Connection</h1>
        <button className="banner-button">GET STARTED</button>
      </div>
    </div>
  );
};

export default Banner;
