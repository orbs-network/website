import PropTypes from "prop-types";
import React from "react";

const WhitePaper = ({
  title,
  header,
  footer,
  script,
  _relativeURL,
  _ID,
  list,
}) => (
  <html style={{ background: "#171819" }}>
    <head>
      <title>Orbs - {title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href={_relativeURL(`/assets/css/index.css`, _ID)}
      />
    </head>
    <body className="white-paper grid-page">
      <header className="main-header">{header}</header>
      <main>
        <div className="white-paper-pdf">
          <section className="white-paper-pdf-overlay"></section>
          <button className="white-paper-pdf-close"></button>
          <iframe className="white-paper-pdf-iframe" src=""></iframe>
        </div>
        <div className="white-paper-list">
          <h1 className="white-paper-list-title">{title}</h1>
          <div className="white-paper-list-flex">
            {list &&
              list.map((category) => {
                return (
                  <div className="white-paper-category">
                    <section className="white-paper-category-title">
                      {category.title}
                    </section>
                    {category.whitePapers}
                  </div>
                );
              })}
          </div>
        </div>
      </main>
      {script != undefined ? (
        <script
          type="module"
          src={_relativeURL(`/assets/js/${script}.js`, _ID)}
        />
      ) : null}
      {footer}
    </body>
  </html>
);

WhitePaper.propTypes = {
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

WhitePaper.defaultProps = {};

export default WhitePaper;
