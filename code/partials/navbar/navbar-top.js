import React from "react";
import { images } from "../../../assets/js/images";
import { handleUrl } from "../../util/link";
import Flags from "./components/flags";
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
    return handleUrl(url, _relativeURL, _ID);
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

        <Flags
          flags={languages}
          generateUrl={generateUrl}
          customClassName="navbar-top-flags"
        />
      </section>
    </div>
  );
};

export default NavbarTop;
