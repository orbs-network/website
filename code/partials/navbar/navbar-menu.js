import React from "react";
import { images } from "../../../assets/js/images";
import Img from "../shared/Img";
import Flags from "./components/flags";

const NavbarMenu = ({
  socials_white,
  overview,
  resources,
  protocols,
  community,
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
        <button className="hide-menu">
          <Img src={generateUrl(images.common.closeWhite)} alt="menu-toggle" />
        </button>
        <a href={generateUrl(home)} className="logo" rel="noopener">
          <Img
            src={generateUrl("/assets/img/navbar/menu/logo.svg")}
            alt="orbs logo"
          />
          <p style={{ color: "white" }}>ORBS</p>
        </a>

        {socials_white}
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
        {protocols}
        {community}
        {resources}
      </div>
      <div className="navbar-menu-mobile-social"> {socials_white}</div>
    </div>
  );
};

export default NavbarMenu;
