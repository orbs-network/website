import React from "react";

const LinkBtn = ({ text, url }) => {
  return (
    <a href={url} className="link-btn">
      {text}
    </a>
  );
};

export default LinkBtn;
