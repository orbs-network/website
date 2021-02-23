import PropTypes from "prop-types";
import React from "react";

/**
 * The page layout component
 */
const Page = ({
  title,
  stylesheet,
  header,
  main,
  footer,
  script,
  _relativeURL,
  _ID,
}) => (
  <html>
    <head>
      <title>Orbs - {title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      />

      <link
        rel="stylesheet"
        href={_relativeURL(`/assets/css/index.css`, _ID)}
      />

      {stylesheet != undefined ? (
        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/${stylesheet}.css`, _ID)}
        />
      ) : null}
      <script src="//unpkg.com/globe.gl"></script>

      <script type="module" src={_relativeURL(`/assets/js/index.js`, _ID)} />
    </head>
    <body>
      <header role="banner">{header}</header>

      <main>{main}</main>

      <footer className="footer">{footer}</footer>

      {script != undefined ? (
        <script src={_relativeURL(`/assets/js/${script}.js`, _ID)} />
      ) : null}
    </body>
  </html>
);

Page.propTypes = {
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

Page.defaultProps = {};

export default Page;
