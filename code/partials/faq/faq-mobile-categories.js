import React from "react";

const FaqMobileMenu = ({ sections }) => {
  return sections ? (
    <div className="faq-mobile-menu">
      <section className="faq-mobile-menu-selected">
        {sections[0].title}
      </section>
      <div className="faq-mobile-menu-list">
        {sections.map((section, index) => {
          return (
            <a
              rel="noopener"
              href={`#${section.title}`}
              className="faq-mobile-menu-link"
              key={index}
            >
              {section.title}
            </a>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default FaqMobileMenu;
