import PropTypes from "prop-types";
import React from "react";
import { colors } from "../../assets/js/consts/consts";
import FaqCategoriesList from "../partials/faq/faq-categories-list";
import FaqMenu from "../partials/faq/faq-menu";

const Faq = (props) => {
  const {
    title,
    header,

    footer,
    script,
    _relativeURL,
    _ID,
    socials,
    sections,
    menuHeader,
    menuLinks,
  } = props;

  return (
    <html style={{ background: colors.main }}>
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
      <body className="faq">
        {header}
        <main className="main-grid">
          <div className="faq-flex flex-between">
            <FaqMenu
              sections={sections}
              socials={socials}
              menuLinks={menuLinks}
              menuHeader={menuHeader}
            />
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
