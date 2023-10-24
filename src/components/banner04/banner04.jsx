import React from 'react';
import Premuim from '../../assets/3rd icons/shopping-bag_8826155.png';
import Global from '../../assets/3rd icons/world-map_5067216.png';
import Network from '../../assets/3rd icons/management_5782851.png';
import './Banner04.css';
import Img1 from '../../assets/h1-banner01-2.jpg';
import Img2 from '../../assets/h1-banner02-2.jpg';
import Img3 from '../../assets/h1-banner03-2.jpg';
import Img4 from '../../assets/h1-banner04-2.jpg';
import Img5 from '../../assets/Screenshot 2023-10-24 121307.png';
import Profile from '../../assets/testimonial.jpg';

export const Banner04 = () => {
  return (
    <div className="banner04bg" style={{ paddingTop: "450px", zIndex: "0" }}>
      <div className="container">
        <div className="col-lg-12 col-md-12 col-sm-12" style={{ display: "flex" }}>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div>
              <h2>OUR NETWORK</h2>
              <h1>10+ Brands | 9 Countries</h1>
            </div>

            <span className="divider"></span>
            <div className="network col-lg-12 col-md-12 col-sm-12">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <img src={Premuim} alt="Premium Brands" style={{ maxWidth: "100px" }} />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-12">
                <h3>Premium Brands</h3>
                <p>We proudly represent 10 internationally renowned lifestyle brands, each offering a unique and exceptional experience.</p>
              </div>
            </div>
            <span className="divider"></span>
            <div className="network col-lg-12 col-md-12 col-sm-12">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <img src={Global} alt="Global Presence" style={{ maxWidth: "100px" }} />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-12">
                <h3>Global Presence</h3>
                <p>Our reach extends across 9 countries, connecting consumers with the latest trends from around the world.</p>
              </div>
            </div>
            <span className="divider"></span>
            <div className="network col-lg-12 col-md-12 col-sm-12">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <img src={Network} alt="Extensive Retail Network" style={{ maxWidth: "100px" }} />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-12">
                <h3>Extensive Retail Network</h3>
                <p>With partnerships with over 40 retailers, we ensure that our premium brands are accessible to consumers through trusted outlets.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-0 col-sm-0">
            <div className="gallery">
              <div className="center-image">
                <img src={Img5} alt="Center" style={{ borderRadius: "15px", boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)' }} />
              </div>
              <div className="corner-image top-left">
                <img src={Img2} alt="Corner 1" style={{borderRadius:"10px"}} />
              </div>
              <div className="corner-image top-right">
                <img src={Img3} alt="Corner 2" style={{borderRadius:"10px"}} />
              </div>
              <div className="corner-image bottom-left">
                <img src={Img1} alt="Corner 3" style={{borderRadius:"10px"}} />
              </div>
              <div className="corner-image bottom-right">
                <img src={Img4} alt="Corner 4"  style={{borderRadius:"10px"}}/>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial col-lg-12 col-md-12 col-sm-12" style={{marginTop:"150PX",zIndex:"999"}}>
          <div className="testi col-lg-6 col-md-6 col-sm-12">
            <h3>FROM THE PARTNER</h3>
            <h6>At the heart of our business lies an unwavering commitment to passion and integrity.</h6>
          </div>
          <div className="testi col-lg-6 col-md-6 col-sm-12">
  <blockquote className="testimonial-text">
    "Our dedication goes beyond profit; it's about understanding the unique needs and desires of both our partners and consumers. We aspire to cultivate a dynamic lifestyle ecosystem that blends the worlds of fashion and fitness seamlessly."
  </blockquote>
  <div className="profile">
    <img src={Profile} alt="Profile Image" className="profile-image" />
    <div className="profile-info">
      <p className="profile-name">John Smith</p>
      <p className="profile-job">PARTNER - Amazon</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Banner04;
