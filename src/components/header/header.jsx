import React, { useState } from 'react';
import './header.css';
import Logo from '../../assets/brand-c-black-1.png';

const Header = () => {
  const [isDropdown1Open, setDropdown1Open] = useState(false);
  const [isDropdown2Open, setDropdown2Open] = useState(false);

  const toggleDropdown = (dropdown) => {
    switch (dropdown) {
      case 1:
        setDropdown1Open(!isDropdown1Open);
        break;
      case 2:
        setDropdown2Open(!isDropdown2Open);
        break;
      default:
        break;
    }
  };

  return (
    <div className="header" style={{ background: 'white', padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div className="header-logo" style={{ fontSize: '24px', fontWeight: 'bold' }}>
        <img src={Logo} style={{ maxWidth: '150px' }} />
      </div>
      <div className="header-navigation">
        <a href="#">BRANDS</a>
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown(1)}
          >
            RETAIL
          </button>
          <div className={`dropdown-content ${isDropdown1Open ? 'show' : ''}`}>
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown(2)}
          >
            BEYOND US
          </button>
          <div className={`dropdown-content ${isDropdown2Open ? 'show' : ''}`}>
            <a href="#">Option 3.1</a>
            <a href="#">Option 3.2</a>
          </div>
        </div>
        <a href="#">HISTORY</a>
        <a href="#">CONTACT US</a>
 
      </div>
      <div className="header-button">
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="header-phone" style={{color:"#000",fontWeight:"bold"}}>+971 5077 082 29</div>
          <div style={{ borderLeft: '1px solid black', height: '20px', margin: '0 10px' }}></div> {/* Add this line to the left of the button */}
          <button style={{ background: 'black', color: 'white',fontWeight:'bold', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>VISIT OFFICE</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
