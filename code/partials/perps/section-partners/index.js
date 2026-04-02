import React from "react";
import { handleUrl } from "../../../util/link";
import MainGrid from "../../shared/MainGrid";

function main({ title, partnersImg, _relativeURL, _ID, _body }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="perps-section-partners perps-section">
      <MainGrid>
        <h3 className="page-colored-section-title">{title}</h3>
        <div className="perps-section-partners-body">{_body}</div>
        <div className="perps-section-partners-img-wrap">
          <img
            src={generateUrl(partnersImg)}
            className="perps-section-partners-img"
          />
        </div>
      </MainGrid>
    </div>
  );
}

export default main;
