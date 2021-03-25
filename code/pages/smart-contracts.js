import PropTypes from "prop-types";
import React from "react";

const SmartContract = ({
  title,
  boxes,
  header,
  footer,
  script,
  _relativeURL,
  contractText,
  _ID,
  pageHeader,
  expendingSection,
  linkBack,
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
    <body className="smart-contracts grid-page">
      <header className="main-header">{header}</header>
      <main>
        {pageHeader}
        {expendingSection}
        {contractText}
        {boxes}
        {linkBack}
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

SmartContract.propTypes = {
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

SmartContract.defaultProps = {};

export default SmartContract;
