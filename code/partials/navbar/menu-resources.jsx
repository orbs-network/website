import React from "react";
import Img from "../common/Img";

const MenuLinks = ({ links, text, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="nav-menu-section nav-menu-resources">
      <h4>{text.title}</h4>
      <ul>
        {links &&
          links.map((link) => {
            const { url, name, image } = link;
            return (
              <li>
                <a href={generateUrl(url)}>
                  <Img src={generateUrl(image)} />
                  <p>{name}</p>
                </a>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default MenuLinks;
