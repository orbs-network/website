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
    <div className="nav-menu">
      <section className="nav-menu-overlay"></section>
      <figure className="nav-menu-bg" />
      <div className="nav-menu-content main-grid">
        <div className="nav-menu-content-flex">
          <div className="nav-menu-content-header flex-between">
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
