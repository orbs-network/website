import React from "react";
import Img from "../common/Img";

const NavbarFlags = ({ languages, _relativeURL, _ID, text, logo, home }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="navbar-top flex-between">
      <div className="menu-burger-wrapper flex-start">
        <button className="menu-burger navbar-burger-open">
          <aside></aside>
          <aside></aside>
          <aside></aside>
        </button>
        <a href={generateUrl(home)} className="flex-center">
          <Img src={generateUrl(logo)} className="logo" />
        </a>
      </div>
      <section class="navbar-flags">
        <span class="flex-start">
          <p>+</p>
          <p>{text.subscribe_to_updates}</p>
        </span>
        <ul class="navbar-flags-list">
          {languages.map((lng) => {
            return (
              <li>
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
