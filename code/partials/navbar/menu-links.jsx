import React from "react";

const MenuResources = ({ links, title, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="nav-menu-section">
      <h4 className="nav-menu-section-title">{title}</h4>
      <div>
        {links &&
          links.map((link) => {
            const { url, name, subLink } = link;
            return (
              <a
                className={
                  subLink
                    ? "nav-menu-section-link nav-menu-section-sub"
                    : "nav-menu-section-link"
                }
                href={generateUrl(url)}
              >
                <figure />
                <p className="nav-menu-section-link-text">{name}</p>
              </a>
            );
          })}
      </div>
    </section>
  );
};

export default MenuResources;
