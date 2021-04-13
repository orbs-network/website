import React from "react";

const FaqMenu = ({ sections, socials, menuLinks, menuHeader }) => {
  return (
    <div className="faq-side-text sticky-section">
      {menuHeader}
      <div className="faq-side-text-links">
        {sections &&
          sections.map((section) => {
            return (
              <a
                href={`#${section.title}`}
                className="faq-side-text-links-link"
              >
                {section.title}
              </a>
            );
          })}
      </div>
      {menuLinks}
      {socials}
    </div>
  );
};

export default FaqMenu;
