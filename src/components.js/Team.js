import React from "react";
import "./Team.css"; // Import CSS file for Team section

const Team = () => {
  return (
    <section className="team-container">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="me.jpg" className="team-img"/>
          <h3 className="team-name">Sanvi Jain</h3>
          <p className="team-role">(President)</p>
        </div>
        <div className="team-member">
          <img src="di.jpg" alt="Team Member 2" className="team-img"/>
          <h3 className="team-name">Anshika Jain</h3>
          <p className="team-role">(Vice President)</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
