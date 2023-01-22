import React from "react";

function Integration({title, link_text}) {


  return (
    <div className="dtwap-integrate">
      <h3 className="dtwap-integrate-title">{title}</h3>
      <a
        target="_blank"
        href="https://github.com/orbs-network/twap"
        className="button"
      >
        {link_text}
      </a>
    </div>
  );
}

export default Integration;
