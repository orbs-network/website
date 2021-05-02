import React from "react";
import Img from "../shared/Img";

const MenuLinks = ({ links, title, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="navbar-menu-links navbar-menu-resources">
      <h4 className="navbar-menu-links-title">{title}</h4>
      <ul className="navbar-menu-links-list navbar-menu-resources-list">
        {links &&
          links.map((link, index) => {
            const { url, name, image, text } = link;
            return (
              <li key={index} className="navbar-menu-resources-box flex-column">
                <a href={generateUrl(url)} className="flex-column">
                  <h5 className="navbar-menu-resources-box-title">{name}</h5>
                  <div className="navbar-menu-resources-box-bottom flex-center">
                    <Img
                      src={generateUrl(image)}
                      className="navbar-menu-resources-box-icon"
                    />
                    <p className="navbar-menu-resources-box-text text-overflow">
                      {text}
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default MenuLinks;
