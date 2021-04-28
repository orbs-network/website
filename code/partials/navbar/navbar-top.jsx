import React from "react";
import { images } from "../../../assets/js/images";
import MenuToggle from "./components/menu-toggle";

const NavbarFlags = ({ languages, _relativeURL, _ID, text, logo, home }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="navbar-top flex-between">
      <MenuToggle
        image={generateUrl(images.common.logo)}
        url={generateUrl(home)}
        toggleImg={generateUrl(images.common.hamburger)}
        customClassName="navbar-burger-open"
      />
      <section className="navbar-flags">
        <button className="flex-start subscribe-btn">
          <p>+</p>
          <p>{text.subscribe_to_updates}</p>
        </button>
        <ul className="navbar-flags-list">
          {languages.map((lng, index) => {
            return (
              <li key={index}>
                <a href={generateUrl(lng.link)}>
                  <img src={generateUrl(lng.img)} />
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default NavbarFlags;
