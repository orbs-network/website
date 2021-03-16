import React from "react";
import { images } from "../../../assets/js/images";
import Menu from "../../navbar-components/Menu";
import Img from "./Img";

const Navbar = ({
  _relativeURL,
  _ID,
  links,
  languages,
  text,
  resources,
  selected,
  overview,
  home,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div class="main-navbar">
      <div className="menu-burger-wrapper flex-start">
        <button className="menu-burger navbar-burger-open">
          <aside></aside>
          <aside></aside>
          <aside></aside>
        </button>
        <a href={home} className="flex-center">
          <Img src={generateUrl(images.common.logo)} className="logo" />
        </a>
      </div>
      <Menu
        overview={overview}
        selected={selected}
        generateUrl={generateUrl}
        links={links}
        text={text}
        resources={resources}
      />
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

export default Navbar;
