import React from "react";
import Socials from "../common-components/socials";
import { navbarOverview } from "./data/data";
import Hamburger from "./Hamburger";

const Menu = ({ generateUrl, links, text, resources, selected }) => {
  const mapLinks = (
    arr,
    linkPropertyName,
    textPropertyName,
    className,
    selected
  ) => {
    return arr.map((link) => {
      const url = link[linkPropertyName];
      const name = link[textPropertyName];
      const isActive = selected == name;
      return (
        <li
          className={className || ""}
          id={isActive ? "nav-menu-link-selected" : ""}
        >
          <a href={generateUrl(url)}>{name}</a>
        </li>
      );
    });
  };

  return (
    <div className="nav-menu">
      <Hamburger isActive={true} customClassName="nav-menu-close" />
      <section className="nav-menu-section">
        <h4>{text.overview}</h4>
        <ul>{mapLinks(navbarOverview, "url", "name", "nav-menu-link")}</ul>
      </section>
      <section className="nav-menu-section nav-menu-resources">
        <h4>{text.resources}</h4>
        <ul className="flex-start">{mapLinks(resources, "url", "name")}</ul>
      </section>
      <section className="nav-menu-section">
        <h4>{text.about}</h4>
        <ul>{mapLinks(links, "link", "name", "nav-menu-link", selected)}</ul>
      </section>
      <Socials generateUrl={generateUrl} />
    </div>
  );
};

Menu.getInitialProps = async function (props) {
  const {
    generateUrl,
    links,
    text,
    resources,
    selected,
  } = await FetchMyDataFromSomewhere(props._ID);
  return { generateUrl, links, text, resources, selected };
};
export default Menu;
