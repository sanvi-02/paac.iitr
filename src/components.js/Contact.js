import React from "react";
import "./Contact.css";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
const Contact = () => {

  return (
    <footer className="contact-container">
      <div className="contact-section">
        <div className="contact-info">
          <h3>Address</h3>
          <p>Student Activity Center (SAC), Room No. 116,</p>
          <p>Indian Institute of Technology Roorkee,</p>
          <p>Roorkee, Uttarakhand 247667</p>
        </div>

        <div className="contact-info">
          <h3>Contact</h3>
          <p>Sumedh: +91 9850672970</p>
          <p>Prajwal: +91 9949216026</p>
          <p>Khushi: +91 8168405906</p>
        </div>

        <div className="contact-info">
          <h3>Email</h3>
          <p>paac@iitr.ac.in</p>
          <div className="social-icons">
            <a href="#" target="_blank"><FaInstagram /></a>
            <a href="#" target="_blank"><FaTwitter /></a>
            <a href="#" target="_blank"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
