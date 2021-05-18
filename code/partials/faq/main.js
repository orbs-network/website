import React from "react";
import SideMenu from "../shared/side-menu";
import FaqCategoriesList from "./faq-categories-list";
import FaqMobileMenu from "./faq-mobile-categories";

const Main = ({
  sideMenuTitle,
  sideMenuLinks,

  socials,
  sections,
}) => {
  const linksProps = (
    <div className="faq-side-menu-links">
      {sections &&
        sections.map((section, index) => {
          return (
            <a
              rel="noopener"
              href={`#${section.title}`}
              className="faq-side-menu-links-link"
              key={index}
            >
              {section.title}
            </a>
          );
        })}
      {sideMenuLinks}
    </div>
  );

  return (
    <main className="faq main-grid">
      <div className="faq-flex flex-between">
        <SideMenu _body={linksProps} title={sideMenuTitle} socials={socials} />
        <FaqMobileMenu
          sections={sections}
          title={sideMenuTitle}
          socials={socials}
        />
        <FaqCategoriesList sections={sections} />
      </div>
    </main>
  );
};

export default Main;
