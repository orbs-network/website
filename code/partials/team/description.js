import React, { Fragment } from "react";

const Description = ({ _body, socials }) => {
  return (
    <section className="team-description sticky-section">
      {_body}
      {socials}
    </section>
  );
};

export default Description;
