import React from "react";
import HandleTextComponent from "./common-components/HandleTextComponents";

const Overview = ({ _relativeURL, _ID, sections, text }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <html>
      <head>
        <script
          type="module"
          src={generateUrl("../assets/js/overview/overview.js")}
        ></script>
      </head>
      <body className="overview grid-page">
        <h1 className="overview-title">{text.title}</h1>
        <div className="overview-text-content">
          <div className="overview-text-content-grid">
            {sections.map((section, index) => {
              if (index <= 3) {
                return <HandleTextComponent section={section} />;
              }
            })}
          </div>
          {sections.map((section, index) => {
            if (index > 3) {
              return <HandleTextComponent section={section} />;
            }
          })}
        </div>
      </body>
    </html>
  );
};
export default Overview;
