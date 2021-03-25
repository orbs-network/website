import React from "react";

const Universe = ({
  title,
  header,
  topSections,
  footer,
  leftText,
  script,
  _relativeURL,
  text,
  images,
  _ID,
  pageHeader,
  expendingSection,
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
    <body className="universe grid-page">
      <header className="main-header">{header}</header>
      <main>
        {pageHeader}
        {topSections}
        <div className="flex-start universe-second-sections">
          {leftText}
          {images}
        </div>
        {text}
        {expendingSection}

        {footer}
      </main>
      {script != undefined ? (
        <script
          type="module"
          src={_relativeURL(`/assets/js/${script}.js`, _ID)}
        />
      ) : null}
    </body>
  </html>
);

export default Universe;
