import React from "react";
import MenuToggle from "./components/menu-toggle";

const NavbarFlags = ({ languages, _relativeURL, _ID, text, logo, home }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="navbar-top flex-between">
      <MenuToggle
        image={generateUrl(logo)}
        url={generateUrl(home)}
        customClassName="navbar-burger-open"
      />
      <section class="navbar-flags">
        <button class="flex-start subscribe-btn">
          <p>+</p>
          <p>{text.subscribe_to_updates}</p>
        </button>
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
