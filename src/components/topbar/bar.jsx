import React from 'react';
import './bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left-side">
        <div className="contact-info">
          <a href="tel:1234567890" className="contact-link">
            <FontAwesomeIcon icon={faPhone}  style={{color:"#fff"}}/>
            <span className="phone">123-456-7890</span>
          </a>
          <a href="mailto:example@email.com" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope}  style={{color:"#fff"}}/>
            <span className="email">example@email.com</span>
          </a>
        </div>
      </div>
      <div className="right-side">
        <div className="office-time">
          <span className="office-time-text">Office Hours: Mon-Fri, 9:00 AM - 5:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
