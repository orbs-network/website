import React from "react";

const FaqLeftSection = ({ text, faqCategories }) => {
  return (
    <div className="faq-desc">
      <h3 className="faq-desc-title">{text.faq}</h3>
      <p>{text.publicBlockchain}</p>
      <div className="faq-desc-links">
        {faqCategories &&
          faqCategories.map((category, index) => {
            return (
              <a
                key={index}
                href={`#${removeSpaces(category.name, "-")}`}
                className="faq-desc-links-link"
              >
                {category.name}
              </a>
            );
          })}
      </div>
      <div className="faq-desc-questions">
        <h5>{text.haveQuestion}</h5>
        <a href="" rel="noopener">
          {text.askUs}
        </a>
      </div>
    </div>
  );
};

export default FaqLeftSection;
