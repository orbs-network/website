import React from "react";
import SideMenu from "../shared/side-menu";
import FaqCategoriesList from "./faq-categories-list";

const Main = (props) => {
  const {
    title,
    sideMenuLinks,

    socials,
    sections,
  } = props;

  const linksProps = (
    <div className="faq-side-menu-links">
      {sections}
      {sideMenuLinks}
    </div>
  );

  return (
    <main className="faq main-grid">
      <div className="faq-flex flex-between">
        <SideMenu _body={linksProps} title={title} />

        <FaqCategoriesList {...props} />
      </div>
    </main>
  );
};

export default Main;
