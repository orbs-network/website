import React from "react";

const FaqLeftSection = ({ text, faqCategories }) => {
  return (
    <div className="faq-desc small-section">
      <h3 className="faq-desc-title">{text.faq}</h3>
      <p>{text.publicBlockchain}</p>
      <div className="faq-desc-links">
        {faqCategories &&
          faqCategories.map((category) => {
            return (
              <a
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
        <a href="">{text.askUs}</a>
      </div>
    </div>
  );
};

export default FaqLeftSection;
