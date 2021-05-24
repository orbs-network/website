import React from "react";
import { isOutherLink } from "../../../util/link";

const MenuResources = ({ links, title, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    const isOuter = isOutherLink(url);
    if (isOuter) {
      return url;
    }
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="navbar-menu-links">
      <h4 className="navbar-menu-links-title">{title}</h4>
      <div>
        {links &&
          links.map((link, index) => {
            const { url, name, subLink } = link;
            return (
              <a
                target={isOutherLink(url) ? "_blank" : ""}
                key={index}
                className={
                  subLink
                    ? "navbar-menu-links-link navbar-menu-links-sub"
                    : "navbar-menu-links-link"
                }
                href={generateUrl(url)}
              >
                <figure />
                <p className="navbar-menu-links-link-text">{name}</p>
              </a>
            );
          })}
      </div>
    </section>
  );
};

export default MenuResources;
