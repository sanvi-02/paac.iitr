import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      {/* Full-page Header Section */}
      <div className="header-container">
        <h1 className="header-title">Physics and Astronomy Club</h1>
        <p className="header-subtitle">Indian Institute of Technology Roorkee</p>
      </div>

      {/* New Page Content */}
      <div className="about-container">
        <h1 className="about-title">What We Do At PaAc?</h1>
        <p className="about-text">
          Welcome to our website! We are passionate about delivering great experiences.
          Have you ever looked at the stars in your search for meaning and turned to science forever? Then welcome to PaAC! A vibrant hub fostering scientific discourse and academic dialogue for the campus community.
          <br /><br />
          While our primary focus spans Physics, Mathematics, and Astronomy, we invite discussions aligned with the scientific method. As an inclusive club, we thrive on student-driven initiatives. Your suggestions for events are not just welcome; they are encouraged.
        </p>
      </div>
    </>
  );
};

export default Header;
