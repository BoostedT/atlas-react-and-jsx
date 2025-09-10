import React from "react";
import dayIcon from "../assets/day.svg";
import eveningIcon from "../assets/evening.svg";
import nightIcon from "../assets/night.svg";

export default function Greeting() {
  const hour = new Date().getHours();

  let text = "Good Night!";
  let icon = nightIcon;

  if (hour >= 6 && hour <= 11) {
    text = "Good Morning!";
    icon = dayIcon;
  } else if (hour >= 12 && hour <= 16) {
    text = "Good Afternoon!";
    icon = dayIcon;
  } else if (hour >= 17 && hour <= 20) {
    text = "Good Evening!";
    icon = eveningIcon;
  }

  return (
    <h1 className="greeting">
      <img src={icon} alt={text} style={{ verticalAlign: "middle", marginRight: 12 }} />
      {text}
    </h1>
  );
}