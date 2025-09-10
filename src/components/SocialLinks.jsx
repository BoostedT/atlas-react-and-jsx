import React from "react";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/tyler-whitchurch/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>

      <a
        href="https://github.com/BoostedT/atlas-react-and-jsx"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub repository"
        title="GitHub repository"
        style={{ marginLeft: 12 }}
      >
        <img src={githubIcon} alt="GitHub" />
      </a>
    </div>
  );
}
