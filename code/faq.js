import React from "react";
import FaqSection from "./faq-components/FaqSection";
import { removeSpaces } from "../assets/js/common";
import Socials from "./common-components/socials";
const Faq = ({ faqCategories, text, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };

  return (
    <html>
      <head>
        <script
          type="module"
          src={generateUrl("../assets/js/faq/faq.js")}
        ></script>
      </head>
      <body className="faq-page grid-page">
        <div className="faq">
          <div className="faq-flex flex-between base-grid">
            <div className="faq-desc small-section">
              <h3 className="faq-desc-title">{text.faq}</h3>
              <p>{text.publicBlockchain}</p>
              <div className="faq-desc-links">
                {faqCategories.map((category) => {
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
              <Socials generateUrl={generateUrl} />
            </div>
            <div className="faq-lists big-section">
              {faqCategories.map((category) => {
                return <FaqSection category={category} />;
              })}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Faq;
