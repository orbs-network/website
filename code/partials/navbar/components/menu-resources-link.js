import React from "react";
import Img from "../../shared/Img";

const MenuResourcesLink = ({ _relativeURL, _ID, image, title, _body, url }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <li className="navbar-menu-resources-box flex-column list-item">
      <a href={url} className="flex-column" rel="noopener" target="_blank">
        <h5 className="navbar-menu-resources-box-title">{title}</h5>
        <div className="navbar-menu-resources-box-bottom flex-center">
          <img src = {generateUrl(image)} />
          {_body}
        </div>
      </a>
    </li>
  );
};

export default MenuResourcesLink;
