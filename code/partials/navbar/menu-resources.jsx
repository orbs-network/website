import React from "react";
import Img from "../shared/Img";

const MenuLinks = ({ links, title, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="nav-menu-links nav-menu-resources">
      <h4 className="nav-menu-links-title">{title}</h4>
      <ul className="grid-3 nav-menu-links-list nav-menu-resources-list">
        {links &&
          links.map((link, index) => {
            const { url, name, image, text } = link;
            return (
              <li key={index} className="nav-menu-resources-box flex-column">
                <a href={generateUrl(url)} className="flex-column">
                  <h5 className="nav-menu-resources-box-title">{name}</h5>
                  <div className="nav-menu-resources-box-bottom flex-center">
                    <Img
                      src={generateUrl(image)}
                      className="nav-menu-resources-box-icon"
                    />
                    <p className="nav-menu-resources-box-text text-overflow">
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
