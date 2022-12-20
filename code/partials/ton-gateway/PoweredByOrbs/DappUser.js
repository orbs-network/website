import React from "react";
import SectionCard from "./SectionCard";

function DappUser({ _body, title, text, arrow }) {
  return (
    <div className="dapp-user ton-gateway-powered-section">
      {arrow}
      <h4>{title}</h4>
      <SectionCard _body={_body} text={text} />
    </div>
  );
}

export default DappUser;
