import React from "react";
import { animations } from "../../../../assets/js/consts/consts";

const SideContent = ({ text, links }) => {
  return (
    <div
      className="team-side-content sticky-section"
      data-aos={animations.fadeRight}
    >
      {text}
      {links}
    </div>
  );
};

export default SideContent;
