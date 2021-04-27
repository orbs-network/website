import React from "react";

const MenuResources = ({ links, title, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="nav-menu-links">
      <h4 className="nav-menu-links-title">{title}</h4>
      <div>
        {links &&
          links.map((link, index) => {
            const { url, name, subLink } = link;
            return (
              <a
                key={index}
                className={
                  subLink
                    ? "nav-menu-links-link nav-menu-links-sub"
                    : "nav-menu-links-link"
                }
                href={generateUrl(url)}
              >
                <figure />
                <p className="nav-menu-links-link-text">{name}</p>
              </a>
            );
          })}
      </div>
    </section>
  );
};

export default MenuResources;
