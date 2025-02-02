import React from "react";
import "./About.css"; 
import Team from "./Team"; 

const About = () => {
  return (
    <section className="about-container">
        <h2 className="about-title">
          What is <span className="highlight">PaAC</span>?
        </h2>
        <p className="about-text">
          Have you ever looked at the stars in your search for meaning and
          turned to science forever? Then welcome to PaAC! A vibrant hub
          fostering scientific discourse and academic dialogue for the campus
          community. While our primary focus spans Physics, Mathematics, and
          Astronomy, we invite discussions aligned with the scientific method.
          As an inclusive club, we thrive on student-driven initiatives. Your
          suggestions for events are not just welcome; they are encouraged.
          Whether you envision a lecture, workshop, or any academic endeavor,
          reach out, and we will collaborate to make it happen! If you are
          enthusiastic about science and academia and are willing to commit
          yourself to organizing and the behind-the-scenes work, join us on our
          endeavors through space and time.
        </p>
      

      <div className="team-section">
        <Team /> {/* Include the Team section below */}
      </div>
    </section>
  );
};

export default About;
