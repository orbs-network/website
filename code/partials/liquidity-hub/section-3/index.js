import React from "react";
import MainGrid from "../../shared/MainGrid";

function main({ title, _body, columns }) {
  return (
    <div className="liquidity-hub-section-3 liquidity-hub-section">
      <MainGrid>
        <h3 className="page-colored-section-title">{title}</h3>
        <div className="liquidity-hub-section-3-subtitle">{_body}</div>
        {columns}
      </MainGrid>
    </div>
  );
}

export default main;
