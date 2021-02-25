import React from "react";
import { locale } from "../locales";
import { supportedLanguages } from "./navbar-components/data/data";
import Header from "./navbar-components/Header";
import Menu from "./navbar-components/Menu";

const Navbar = ({
  _relativeURL,
  _ID,
  links,
  languages,
  text,
  resources,
  selected,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div class="main-navbar">
      <Header />
      <Menu
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
            const img = supportedLanguages[lng.id];
            return (
              <li>
                <a href={lng.link}>
                  <img src={generateUrl(img)} />
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
