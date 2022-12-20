import React from "react";
import { images } from "../../../assets/js/images";
import { handleUrl } from "../../util/link";
import Img from "../shared/Img";
import Flags from "./components/flags";

const NavbarTop = ({
  languages,
  _relativeURL,
  _ID,
  home,
  blog,
  blog_link,
  developers,
  developers_url,
  status,
  status_url,
  github,
  github_url,
}) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <div className="navbar-top flex-between">
      <div className="navbar-top-left">
        <button className="show-menu">
          <Img
            src={generateUrl("/assets/img/navbar/hamburger.svg")}
            alt="menu-toggle"
          />
        </button>
        <a href={generateUrl(home)} className="logo" rel="noopener">
          <Img src={generateUrl(images.common.logo)} alt="orbs logo" />
          <p>ORBS</p>
        </a>
      </div>
      <section className="navbar-top-right">
        <a
          rel="noreferrer"
          href={developers_url}
          className="navbar-top-action-btn blog-btn"
        >
          {`+ ${developers}`}
        </a>
        <a
          rel="noreferrer"
          href={status_url}
          className="navbar-top-action-btn blog-btn"
        >
          {`+ ${status}`}
        </a>
        <a
          rel="noreferrer"
          href={generateUrl(blog_link)}
          className="navbar-top-action-btn blog-btn"
        >{`+ ${blog}`}</a>
        <a
          rel="noreferrer"
          href={github_url}
          className="navbar-top-action-btn blog-btn"
        >
          {`+ ${github}`}
        </a>
        {/* <button
          className="navbar-top-action-btn subscribe-btn"
          aria-label="subscribe"
        >{`+ ${subscribe_to_updates}`}</button> */}

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
