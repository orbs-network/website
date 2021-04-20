import React from "react";

const SideContent = ({ text, links, socials }) => {
  return (
    <div className="team-side-content sticky-section">
      {text}
      {links}
      {socials}
    </div>
  );
};

export default SideContent;
