import React from "react";
import Img from "../common/Img";

const MenuLinks = ({ links, title, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="nav-menu-section nav-menu-resources">
      <h4 className="nav-menu-section-title">{title}</h4>
      <ul>
        {links &&
          links.map((link) => {
            const { url, name, image, text } = link;
            return (
              <li className="nav-menu-resources-box flex-column">
                <a href={generateUrl(url)} className="flex-column">
                  <span className="flex-center">
                    <Img
                      src={generateUrl(image)}
                      className="nav-menu-resources-box-icon"
                    />
                    <h5 className="nav-menu-resources-box-title">{name}</h5>
                  </span>
                  <p className="nav-menu-resources-box-text text-overflow">
                    {text}
                  </p>
                </a>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default MenuLinks;
