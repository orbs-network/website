import React from "react";
import { handleUrl } from "../../../util/link";
import SectionCard from "./SectionCard";

function TonValidatorNode({ title, _relativeURL, _ID, _body, text }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="ton-validator ton-gateway-powered-section">
      <h4>{title}</h4>
      <div className="flex">
        <img src={generateUrl("/assets/img/ton-gateway/ton-validator.svg")} />
        <SectionCard _body={_body} text={text} />
      </div>
    </div>
  );
}

export default TonValidatorNode;
