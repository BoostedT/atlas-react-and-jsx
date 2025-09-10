import React from "react";
import openIcon from "../assets/open.svg";

function normalizeUrl(url) {
  if (!url) return "";
  try {
    // If it already has a protocol, this succeeds.
    return new URL(url).toString();
  } catch {
    // Add https:// if user passed domain only
    return `https://${url}`;
  }
}

export default function OpenLink({ link }) {
  const href = normalizeUrl(link);

  const handleClick = (e) => {
    // If href is empty, do nothing.
    if (!href) {
      e.preventDefault();
      return;
    }
    // Fallback in case CSS/overlay prevents default anchor behavior
    // (still a user gesture so not blocked by pop-up blockers)
    // Comment out if you strictly want anchor navigation only.
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open link in new tab"
      title={href || "Invalid link"}
      onClick={handleClick}
      style={{ display: "inline-flex", alignItems: "center", cursor: "pointer" }}
    >
      <img src={openIcon} alt="" aria-hidden="true" />
    </a>
  );
}
