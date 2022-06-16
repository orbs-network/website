import React from "react";

const MenuResources = ({ links, title, id }) => {
  return (
    <section className={`navbar-menu-links navbar-menu-links-${id}`}>
      <h4 className="navbar-menu-links-title">{title}</h4>
      <ul>{links}</ul>
    </section>
  );
};

export default MenuResources;
