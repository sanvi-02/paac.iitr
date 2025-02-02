import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const artImages = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg",
  "pic7.jpg",
  "pic8.jpg",
  "pic9.jpg",
  // "pic10.jpg",
  "pic11.jpg",
 
];

const Header = () => {
  return (
    <>
      <div className="header-container">
        <h1 className="header-title">Physics and Astronomy Club</h1>
        <p className="header-subtitle">Indian Institute of Technology Roorkee</p>
      </div>
      <div className="about-container">
        <h1 className="about-title">What We Do At PaAc?</h1>
        <p className="about-text">
          Welcome to our website! We are passionate about delivering great experiences.
          Have you ever looked at the stars in your search for meaning and turned to science forever? Then welcome to PaAC! A vibrant hub fostering scientific discourse and academic dialogue for the campus community.
          <br /><br />
          While our primary focus spans Physics, Mathematics, and Astronomy, we invite discussions aligned with the scientific method. As an inclusive club, we thrive on student-driven initiatives. Your suggestions for events are not just welcome; they are encouraged.
        </p>
      </div>
      <div className="gallery-container">
        <h2 className="gallery-title">Art Gallery</h2>
        <div className="gallery-grid">
          {artImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Art ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
      <div className="meet-team-container">
        <h2 className="new-heading">Wondering Who All Made This Happen?</h2>
         <div className="meet-team-box">
        <Link to="/about#team" className="meet-team-link">
          <div className="meet-team-box">
            <h3 className="meet-team-title">Meet Our Team</h3>
          </div>
        </Link>
      </div>
      </div>
    </>
  );
};

export default Header;

