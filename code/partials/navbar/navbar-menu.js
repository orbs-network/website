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
    <div className="navbar-menu">
      <div className="navbar-menu-header flex-between">
        <MenuToggle
          image={'/assets/img/navbar/menu/logo.svg'}
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
        {about}
        {resources}
      </div>
      <div className="navbar-menu-mobile-social"> {socials}</div>
    </div>
  );
};

export default NavbarMenu;
