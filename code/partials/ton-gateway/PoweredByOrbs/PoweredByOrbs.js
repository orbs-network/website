import React from "react";
import { handleUrl } from "../../../util/link";
import MainGrid from "../../shared/MainGrid";

function PoweredByOrbs({ title, _body, graph, partOfDapp, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="ton-gateway-powered">
      <MainGrid>
        <h3>{title}</h3>
        <img src={generateUrl(graph)} className="ton-gateway-powered-graph" />
        <div className="ton-gateway-powered-bottom">
          <figure />
          <p>{partOfDapp}</p>
        </div>
        <div className="ton-gateway-powered-body">{_body}</div>
      </MainGrid>
    </div>
  );
}

export default PoweredByOrbs;
