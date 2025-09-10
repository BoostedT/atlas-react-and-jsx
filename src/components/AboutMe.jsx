import React from "react";

const AboutMe = () => {
  return (
    <div className="about-me">
      <img
        src="images/me.jpg"
        alt="Professional headshot"
        className="profile-pic"
        style={{ width: "200px", borderRadius: "8px" }}
      />
      <p>
        Hi! My name is Tyler Whitchurch. I’m specializing in Full-Stack Web
        Development and currently in my third trimester at Atlas School. My
        favorite technologies to work with are Python, JavaScript, and React.  
        After school, I want to pursue a career as a software engineer, working
        on impactful applications that solve real problems. Outside of coding,
        I enjoy golf, gaming, and working on cars.
      </p>
    </div>
  );
};

export default AboutMe;
