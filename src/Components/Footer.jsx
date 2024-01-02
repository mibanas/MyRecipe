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

