import React from "react";
import { handleUrl } from "../../../util/link";
import MainGrid from "../../shared/MainGrid";

function main({ title, diagram, _relativeURL, _ID, _body }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="perps-section-2 perps-section">
      <MainGrid>
        {title && <h3 className="page-colored-section-title">{title}</h3>}
        <div className="perps-section-2-body">{_body}</div>
        <div className="perps-section-2-diagram-outer">
          <div className="perps-section-2-diagram-wrap">
            <img src={generateUrl(diagram)} className="perps-section-2-diagram" />
          </div>
        </div>
      </MainGrid>
    </div>
  );
}

export default main;
