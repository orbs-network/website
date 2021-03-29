import PropTypes from "prop-types";
import React from "react";
import BreadCrumbs from "../partials/common/bread-crumbs";

const BlogInner = ({
  title,
  header,
  breadCrumbs,
  footer,
  script,
  _relativeURL,
  _ID,
  main,
  pageHeader,
  blog,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
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
      <body className="blog blog-inner grid-page">
        <header className="main-header">{header}</header>
        <main>
          {pageHeader}
          {breadCrumbs}
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
};

export default BlogInner;
