import PropTypes from "prop-types";
import React from "react";

const BlogInner = ({
  title,
  header,

  footer,
  script,
  _relativeURL,
  _ID,
  main,
  pageHeader,
  blog,
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
    <body className="blog blog-inner grid-page">
      <header className="main-header">{header}</header>
      <main>
        {pageHeader}
        <div className="blog-list">{blog}</div>
        {main}
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

BlogInner.propTypes = {
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

BlogInner.defaultProps = {};

export default BlogInner;
