import React from "react";
import { images } from "../../../assets/js/images";
import MenuToggle from "./components/menu-toggle";

const NavbarTop = ({
  languages,
  _relativeURL,
  _ID,
  subscribe_to_updates,
  home,
  blog,
  blog_link,
}) => {
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
      <section className="navbar-top-right">
        <a
          rel="noreferrer"
          href={generateUrl(blog_link)}
          className="navbar-top-action-btn blog-btn"
        >{`+ ${blog}`}</a>
        <button
          className="navbar-top-action-btn subscribe-btn"
          aria-label="subscribe"
        >{`+ ${subscribe_to_updates}`}</button>

        <ul className="navbar-flags">
          {languages.map((lng, index) => {
            return (
              <li key={index}>
                <a href={generateUrl(lng.link)} rel="noopener">
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

export default NavbarTop;
