import React from "react";
import { handleUrl } from "../../../util/link";

function Card({ _body, _relativeURL, _ID, title, icon }) {
  const generateUrl = (url) => handleUrl(url, _relativeURL, _ID);

  return (
    <div className="agentic-breaks-card">
      {icon && <img src={generateUrl(icon)} alt={title} className="agentic-breaks-card-icon" />}
      <h3 className="agentic-breaks-card-title">{title}</h3>
      <div className="agentic-breaks-card-desc">{_body}</div>
    </div>
  );
}

export default Card;
