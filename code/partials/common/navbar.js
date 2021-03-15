import React from "react";
import Menu from "../../navbar-components/Menu";
import MenuToggle from "../../navbar-components/MenuToggle";

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
      <div className="navbar-header">
        <MenuToggle
          link={generateUrl(home)}
          generateUrl={generateUrl}
          customClassName="navbar-burger-open"
        />
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
