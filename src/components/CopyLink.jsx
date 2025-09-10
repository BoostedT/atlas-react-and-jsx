import React from "react";
import copyIcon from "../assets/copy.svg";

export default function CopyLink({ link }) {
  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(link);
      } else {
        // Fallback for older browsers
        const ta = document.createElement("textarea");
        ta.value = link;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      // console.log("Copied:", link);
    } catch (e) {
      console.error("Copy failed:", e);
    }
  };

  return (
    <img
      className="copy"
      src={copyIcon}
      alt="Copy link"
      title="Copy link"
      onClick={handleCopy}
      style={{ cursor: "pointer" }}
    />
  );
}
