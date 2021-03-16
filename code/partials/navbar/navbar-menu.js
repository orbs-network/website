import React from "react";
import { images } from "../../../assets/js/images";
import Img from "../common/Img";
import MenuLinks from "./menu-links";

const NavbarMenu = ({
  socials,
  logo,
  overview,
  resources,
  links,
  text,
  _relativeURL,
  _ID,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="nav-menu">
      <div className="menu-burger-wrapper flex-start">
        <button className="menu-burger navbar-burger-close">
          <img src={generateUrl(images.common.close)} />
        </button>
        <Img src={generateUrl(logo)} className="logo" />
      </div>
      <MenuLinks
        arr={overview}
        linkClassName="nav-menu-link"
        title={text.overview}
        generateUrl={generateUrl}
      />
      <MenuLinks
        arr={resources}
        title={text.resources}
        generateUrl={generateUrl}
        sectionClassName="nav-menu-resources"
        listClassName="flex-start"
      />
      <MenuLinks
        arr={links}
        title={text.about}
        generateUrl={generateUrl}
        linkClassName="nav-menu-link"
      />
      {socials}
    </div>
  );
};

export default NavbarMenu;
