import React from "react";
import Socials from "../common-components/socials";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";

const Menu = ({ generateUrl, links, text, resources, overview }) => {
  return (
    <div className="nav-menu">
      <MenuToggle
        generateUrl={generateUrl}
        customClassName="navbar-burger-close"
      />
      <MenuLinks
        arr={overview}
        linkClassName="nav-menu-link"
        title={text.overview}
        generateUrl={generateUrl}
      />
      <MenuLinks
        arr={resources}
        title={text.resources}
        generateUrl={generateUrl}
        sectionClassName="nav-menu-resources"
        listClassName="flex-start"
      />
      <MenuLinks
        arr={links}
        title={text.about}
        generateUrl={generateUrl}
        linkClassName="nav-menu-link"
      />
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
