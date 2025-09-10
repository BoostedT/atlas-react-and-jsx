import React from "react";
import Greeting from "./Greetings.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Header() {
  return (
    <nav>
      <Greeting />
      <SocialLinks />
    </nav>
  );
}
