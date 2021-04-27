import React from "react";

const Links = ({ title, links }) => {
  return (
    <React.Fragment>
      <h3 className="footer-navigation-links-title">{title}</h3>
      <div className="footer-navigation-links-list">
        {links.map(({ name, url }) => {
          return (
            <a href={url} key={name}>
              {name}
            </a>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Links;
