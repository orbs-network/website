import React from "react";
import { handleUrl } from "../../../../util/link";

function Selectbox({ list, property, _body, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="selectbox" data-key={property}>
      <div className="selectbox-title">{_body}</div>
      <div className="selectbox-selected">
        <p className="selectbox-selected-value"></p>
        <img src={generateUrl("/assets/img/ton-gateway/arrow-down.svg")} />
      </div>
      <ul className="selectbox-list">{list}</ul>
    </div>
  );
}

export default Selectbox;
