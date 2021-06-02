import React from "react";

const MenuResources = ({ links, title }) => {
  return (
    <section className="navbar-menu-links">
      <h4 className="navbar-menu-links-title">{title}</h4>
      <ul>{links}</ul>
    </section>
  );
};

export default MenuResources;
