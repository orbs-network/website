import React from "react";
import MainGrid from "../../shared/MainGrid";

function index({ _body, title }) {
  return (
    <div className="liquidity-hub-section-4 liquidity-hub-section">
      <MainGrid>
        <h3 className="page-colored-section-title">{title}</h3>
        <div className="liquidity-hub-section-4-body">{_body}</div>
      </MainGrid>
    </div>
  );
}

export default index;
