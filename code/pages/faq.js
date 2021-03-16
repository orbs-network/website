import PropTypes from "prop-types";
import React from "react";
import FaqCategoriesList from "../partials/faq/faq-categories-list";

const Faq = (props) => {
  const {
    title,
    header,
    text,
    footer,
    script,
    _relativeURL,
    _ID,
    socials,
    sections,
  } = props;
  return (
    <html style={{ background: "#171819" }}>
      <head>
        <title>Orbs - {title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/index.css`, _ID)}
        />
      </head>
      <body className="faq grid-page">
        <header className="main-header">{header}</header>
        <main>
          <div className="faq-flex flex-between">
            <div className="faq-desc sticky-section">
              <h3 className="faq-desc-title">{text.faq}</h3>
              <p className="faq-desc-sub-title">{text.publicBlockchain}</p>
              <div className="faq-desc-links">
                {sections &&
                  sections.map((section) => {
                    return (
                      <a
                        href={`#${section.title}`}
                        className="faq-desc-links-link"
                      >
                        {section.title}
                      </a>
                    );
                  })}
              </div>
              <div className="faq-desc-questions">
                <h5>{text.haveQuestion}</h5>
                <a href="">{text.askUs}</a>
              </div>
              {socials}
            </div>
            <FaqCategoriesList sections={sections} />
          </div>
        </main>
        {footer}
        {script != undefined ? (
          <script
            type="module"
            src={_relativeURL(`/assets/js/${script}.js`, _ID)}
          />
        ) : null}
      </body>
    </html>
  );
};

Faq.propTypes = {
  /**
   * title: Homepage
   */
  title: PropTypes.string.isRequired,

  /**
   * main: (partials)(5)
   */
  main: PropTypes.node.isRequired,

  /**
   * footer: (partials)(2)
   */
  footer: PropTypes.node.isRequired,
};

Faq.defaultProps = {};

export default Faq;
