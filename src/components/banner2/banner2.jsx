import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from '../../assets/about-us-2.jpg';
import './Banner2.css';

const Banner2 = () => {
  return (
    <div className='container' style={{marginTop:"50px"}}>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <img src={Image1} alt='Our Image' style={{ maxWidth: "90%" }} />
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <div>
            <h6 style={{ fontWeight: "bold",marginTop:"50px" }}>WHAT WE DO?</h6>
          </div>
          <div>
            <h3 style={{fontWeight:'bold',paddingBottom:"20PX"}}>Brand Builders and Developers</h3>
          </div>
          <p>
            We are more than just a distributor; we are brand builders and developers. Our deep industry knowledge, combined with years of experience, has enabled us to create a versatile business model tailored to the ever-evolving retail landscape. We stay ahead of the curve by continuously adapting to market trends and consumer preferences, ensuring that our brands thrive in the competitive retail environment.
<br></br>
<div></div>
<br></br>
            At Brand Connection Trading, we are driven by our passion for connecting people with the lifestyle brands they love. Our mission is to bring innovation, style, and quality to every corner of the MENA region. Whether you are a retailer seeking premium brands or a consumer in search of the latest trends, you can trust Brand Connection Trading to be your partner in style and fitness.

            <br></br>
<div></div>
<br></br>
            Explore our website to learn more about our brands and services, and discover how we can enhance your retail experience. Join us on our journey as we continue to shape the future of lifestyle brand distribution in the Middle East.
          </p>
          <button className='banner2button' style={{background:"#000",borderRadius:"15px",color:'#fff',padding:"10px 25px"}}>
          READ MORE 
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner2;
