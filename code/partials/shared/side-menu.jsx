import React from "react";

const SideMenu = ({ title, _body, socials }) => {
  return (
    <div className="side-menu">
      <h3 className="side-menu-title">{title}</h3>
      <div className="side-menu-body">{_body}</div>
      {socials}
    </div>
  );
};

export default SideMenu;
