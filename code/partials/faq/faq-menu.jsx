import React from "react";

const FaqMenu = ({ sections, socials, menuLinks, menuHeader }) => {
  return (
    <div className="faq-side-content sticky-section">
      {menuHeader}
      <div className="faq-side-content-links">
        {sections &&
          sections.map((section) => {
            return (
              <a
                href={`#${section.title}`}
                className="faq-side-content-links-link"
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
