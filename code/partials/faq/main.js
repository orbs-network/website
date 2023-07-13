import React from "react";
import MainGrid from "../shared/MainGrid";
import SideMenu from "../shared/side-menu";
import FaqCategoriesList from "./faq-categories-list";

const Main = (props) => {
  const { title, sideMenuLinks, sections, noTitleTextTransform } = props;

  const linksProps = (
    <div className="faq-side-menu-links">
      {sections}
      {sideMenuLinks}
    </div>
  );

  const titleProps = noTitleTextTransform ? { className: "no-text-transform" } : {}

  return (
    <main className="faq page">
      <MainGrid>
        <header className="header">
          <h1 {...titleProps}>{title}</h1>
        </header>
        <div className="faq-flex flex-between">
          <SideMenu _body={linksProps} />

          <FaqCategoriesList {...props} />
        </div>
      </MainGrid>
    </main>
  );
};

export default Main;
