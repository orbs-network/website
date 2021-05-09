import React from "react";
import { images } from "../../../assets/js/images";
import Flags from "./components/flags";
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
  languages,
  subscribe_to_updates,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="navbar-menu" style={{ display: "none" }}>
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
          <Flags
            flags={languages}
            generateUrl={generateUrl}
            customClassName="navbar-menu-mobile-flags"
          />
          <button
            className="mobile-subscribe subscribe-btn"
            aria-label="subscribe"
          >{`+ ${subscribe_to_updates}`}</button>
          <div className="navbar-menu-flex">
            {overview}
            {resources}
            {about}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
