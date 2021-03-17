import React from "react";

const MenuResources = ({ links, text, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="nav-menu-section nav-menu-links">
      <h4>{text.title}</h4>
      <ul>
        {links &&
          links.map((link) => {
            const { url, name } = link;
            return (
              <li>
                <a href={generateUrl(url)}>
                  <figure />
                  <p>{name}</p>
                </a>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default MenuResources;
