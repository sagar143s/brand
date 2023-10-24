import React from 'react';
import Backgroundimg from '../../assets/04 (1).jpg';
import './banner06.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faShoePrints, faRing, faClock } from '@fortawesome/free-solid-svg-icons';

export const Banner06 = () => {
  // Use the imported image
  const backgroundImageUrl = `url(${Backgroundimg})`;

  const bannerStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    marginTop: '-150px',
    zIndex: 0,
  };

  return (
    <div className='backgrounds' style={bannerStyle}>
      <h1 style={{ marginTop: '150px' }}>Expand Your Business</h1>
      <div className="box-container">
        <div className="box">
         <div className='boxicon'><FontAwesomeIcon icon={faTshirt} size="4x" /></div> 
          <p>SPORTS FASHION</p>
        </div>
        <div className="box">
         <div className='boxicon'> <FontAwesomeIcon icon={faShoePrints} size="4x" /></div>
          <p>FOOTWEAR</p>
        </div>
        <div className="box">
         <div className='boxicon'><FontAwesomeIcon icon={faRing} size="4x" /></div> 
          <p>JEWELRY</p>
        </div>
        <div className="box">
          <div className='boxicon'><FontAwesomeIcon icon={faClock} size="4x" /></div>
          <p>WATCHES</p>
        </div>
      </div>
    </div>
  );
};

export default Banner06;
