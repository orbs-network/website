import React from "react";
import { handleUrl } from "../../util/link";

const Main = ({ breadCrumbs, pdfUrl, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <main className="white-paper main-grid flex-column page-padding-top">
      {breadCrumbs}
      <div className="white-paper-iframe">
        <iframe src={generateUrl(pdfUrl)} frameBorder="0"></iframe>
      </div>
    </main>
  );
};

export default Main;
