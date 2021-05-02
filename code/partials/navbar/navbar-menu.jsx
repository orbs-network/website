import React from "react";
import { images } from "../../../assets/js/images";
import MenuToggle from "./components/menu-toggle";

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
    <div className="navbar-menu">
      <section className="navbar-menu-overlay"></section>
      <div className="navbar-menu-content">
        <div className="navbar-menu-content-wrapper">
          <div className="navbar-menu-content-header flex-between">
            <MenuToggle
              image={generateUrl(logo)}
              url={generateUrl(home)}
              customClassName="navbar-burger-close"
              toggleImg={generateUrl(images.common.close)}
            />
            {socials}
          </div>
          {overview}
          {resources}
          {about}
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
