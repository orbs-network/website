import React from "react";

const PageText = ({ _body, socials }) => {
  return (
    <div className="home-flex">
      <aside />
      <section class="home-flex-text">{_body}</section>
      {socials}
    </div>
  );
};

export default PageText;
