import React from "react";

const PageText = ({ _body, socials }) => {
  return (
    <div className="home-text">
      <aside />
      <section className="home-text-flex">{_body}</section>
      {socials}
    </div>
  );
};

export default PageText;
