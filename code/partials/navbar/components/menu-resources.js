import React from "react";

const MenuLinks = ({ links, title }) => {
  return (
    <section className="navbar-menu-links navbar-menu-resources">
      <h4 className="navbar-menu-links-title">{title}</h4>
      <ul className="navbar-menu-links-list navbar-menu-resources-list">
        {links}
      </ul>
    </section>
  );
};

export default MenuLinks;
