import React, { Fragment } from "react";

const Description = ({ _body, socials }) => {
  return (
    <div className="team-left-content">
      {_body}
      {socials}
    </div>
  );
};

export default Description;
