import React from "react";
import { images } from "../../../assets/js/images";
import Img from "../common/Img";

const NavbarMenu = ({
  socials,
  logo,
  overview,
  resources,
  about,
  _relativeURL,
  _ID,
  home,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="nav-menu">
      <section className="nav-menu-overlay"></section>
      <div className="nav-menu-content">
        <div className="menu-burger-wrapper flex-start">
          <button className="menu-burger navbar-burger-close">
            <img src={generateUrl(images.common.close)} />
          </button>
          <a href={generateUrl(home)} className="flex-center">
            <Img src={generateUrl(logo)} className="logo" />
          </a>
        </div>
        {overview}
        {resources}
        {about}
        {socials}
      </div>
    </div>
  );
};

export default NavbarMenu;
