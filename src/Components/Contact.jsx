import React from "react";
import img10 from "../Assets/img/contactus.jpg";
import "../Assets/styles/Contact.css"; 


export default function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${img10})` }}

      >

      </div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" placeholder="Enter full name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Enter Email" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter message"
            required
          ></textarea>
          <button type="Submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
