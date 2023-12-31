import React from "react";
// import logon from "../Assets/img/F.png";
import F from  "../Assets/img/F.png";
import oodi from "../Assets/img/oodi.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Assets/styles/footer.css"
export default function Footer(){
    return (
      <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={F} alt="" />
          <img src={oodi} alt="" />
        </div>

        <div className="footer-icons">
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
           <FontAwesomeIcon icon="fa-brands fa-facebook" />
           <FontAwesomeIcon icon="fa-brands fa-twitter" />
          
           <p>&copy; 2023 | All Rights Reserved</p>

        </div>
      </div>
      <div className="footer-section-two">
      <div className="footer-section-columns">
        <h1> Main Menu</h1>
                <p>Home</p>
                <p>Menu</p>
                <p>blogs</p>
        </div>
        <div className="footer-section-columns">
          <h1> Useful links</h1>
                <p>About us</p>
                <p>Events</p>
                <p>blogs</p>
        </div>
        <div className="footer-section-columns">
        <h1> Main Menu</h1>
                <p>Home</p>
                <p>Menu</p>
                <p>blogs</p>
        </div>
        <div className="footer-section-columns">
        <div className="footer-section">
               <h1 className="title">Contact Us</h1>
                <p>foodies@gmail.com</p>
                <p>+212-765-555-894</p>
                <p>2393 Casablanca</p>
            </div>
        </div>
        

      </div>
    </div>
        
        
          
    )
}



  {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" />
           <FontAwesomeIcon icon="fa-brands fa-instagram" />
           <FontAwesomeIcon icon="fa-brands fa-facebook" />
         <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}

         
          
        //   <p> &copy; 2023 FOODIE.com</p>
            
        // </div>
{/* <div className="footer">
<div className="footer-section-one">
  <div className="footer-logo-container">
    <img src={Logo} alt="" />
  </div>
  <div className="footer-icons">
    <BsTwitter />
    <SiLinkedin />
    <BsYoutube />
    <FaFacebookF />
  </div>
</div>
<div className="footer-section-two">
  <div className="footer-section-columns">
    <span>Qualtiy</span>
    <span>Help</span>
    <span>Share</span>
    <span>Carrers</span>
    <span>Testimonials</span>
    <span>Work</span>
  </div>
  <div className="footer-section-columns">
    <span>244-5333-7783</span>
    <span>hello@food.com</span>
    <span>press@food.com</span>
    <span>contact@food.com</span>
  </div>
  <div className="footer-section-columns">
    <span>Terms & Conditions</span>
    <span>Privacy Policy</span>
  </div>
</div>
</div> */}







{/* <div className="footer-section">
                <p className="title">FOodies.com</p>
                <p><span className="f">F</span>Oodies is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free.</p>
                <p>&copy; 2023 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>foodies@gmail.com</p>
                <p>+212-765-555-894</p>
                <p>2393 Casablanca</p>
            </div>
            <div className="footer-section">
                <p className="title"> Follow Us On Socials Media:</p>

                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                
            </div> */}





            // <div className="footer container">
        //     <div className="footer-section">
        //         <p className="title">Foodies.com</p>
        //         <p>Foodies is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free.</p>
        //         <p>&copy; 2023 | All Rights Reserved</p>
        //     </div>
        //     <div className="footer-section">
        //         <p className="title">Contact Us</p>
        //         <p>foodieshub@gmail.com</p>
        //         <p>+342-5324-9454</p>
        //         <p>2393 Street NYC</p>
        //     </div>
        //     <div className="footer-section">
        //         <p className="title">Socials</p>
        //         <span className="social">
        //         <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        //    <FontAwesomeIcon icon="fa-brands fa-instagram" />
        //    <FontAwesomeIcon icon="fa-brands fa-facebook" />
        //    <FontAwesomeIcon icon="fa-brands fa-twitter" />
        //    </span>
        //     </div>

        // </div>