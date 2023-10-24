import React, { useState } from 'react';
import './Banner.css';
import Icon1 from '../../assets/3rd icons/I cons F5.png'
import Bannimg from '../../assets/imgg.png'
import Icon2 from '../../assets/3rd icons/I cons F4.png'
import Icon3 from '../../assets/3rd icons/I cons F3.png'
import Icon4 from '../../assets/3rd icons/I cons F2.png'
import Icon5 from '../../assets/3rd icons/I cons F1.png'
import Youtube from '../../assets/3rd icons/you.png'


const Banner3 = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
    const handlePopupClick = (e) => {
    if (e.target.classList.contains('popup')) {
      closePopup();
    }
  };

  return (
    <div className="banner-container">
      <div className="container" id='bigbox'>
        <div className="banner-title03">
          <h1 style={{fontWeight:"BOLD"}}>We Deliver Solution with the Goal of Trusting Relationships</h1>
        </div>
        <div className="banner-icons">
          <div className="icon">
          <center>
            <div className="icon-box">
              <img src={Icon1} alt="Icon 1" />
           
            </div>
            </center>
            <p>Official Distributors</p>
          </div>
          <div className="icon">
          <center>
            <div className="icon-box">
              <img src={Icon2} alt="Icon 2" />
         
            </div>
            </center>
            <p>Liaison Office For Brands</p>
          </div>
          <div className="icon">
            <center>
            <div className="icon-box">
              <img src={Icon3} alt="Icon 3" />
            </div>
            </center>
           
            <p>Supply E-Commerce</p>
          </div>
          <div className="icon">
          <center>
            <div className="icon-box">
              <img src={Icon4} alt="Icon 4" />
             
            </div>
            </center>
            <p>Sell Retailers</p>
          </div>
          <div className="icon">
          <center>
            <div className="icon-box">
              <img src={Icon5} alt="Icon 5" />
             
            </div>
            </center>
            <p>Develop Private Labels</p>
          </div>
        </div>
        {/* <center><img src={Bannimg} className='youtube'/></center> */}
        <div className='youtube01 col-lg-12 col-md-12' style={{display:"flex",justifyContent:"center",textAlign:"center",fontWeight:"bold",color:"#FFF",zIndex:"100"}}>
       
        <div className='col-lg-6 col-md-6' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
    <img src={Youtube} alt='youtube' style={{ maxWidth: '150px' }}  onClick={openPopup} />
         </div>
         <div className='col-lg-6 col-md-6' style={{ display: 'flex', alignItems: 'center' }}>
    <h2>
        <b>Agency Excited With Our Solutions</b>
    </h2>
</div>

        </div>
        
        {showPopup && (
        <div className="popup" onClick={handlePopupClick}>
            <div className="popup-content">
              <span className="close-popup" onClick={closePopup}>
                &times;
              </span>
              <iframe width="660" height="415" src="https://www.youtube.com/embed/BVCiEqbCL6Y?si=fs4ho6mALc1CM11V" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />            </div>
          </div>
        )}
      </div>
    
    </div>
  );
};

export default Banner3;
