import React from "react";
import { handleUrl } from "../../util/link";
import LinkBtn from "../shared/link-btn";

const Main = ({ breadCrumbs, pdfUrl, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <main className="white-paper page main-grid flex-column page-padding-top">
      {breadCrumbs}
      <div className="white-paper-iframe">
        <div className="white-paper-iframe-desktop">
          <object
            data={generateUrl(pdfUrl)}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              It appears you don't have a PDF plugin for this browser. No
              biggie... you can{" "}
              <a href={generateUrl(pdfUrl)}>
                click here to download the PDF file.
              </a>
            </p>
          </object>
        </div>
        <div className="white-paper-iframe-mobile">
          <a href={generateUrl(pdfUrl)} target="_blank">
            View
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
