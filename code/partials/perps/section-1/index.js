import React from "react";
import MainGrid from "../../shared/MainGrid";

function main({ cards, _body }) {
  return (
    <div className="perps-section-1 perps-section">{cards}
    <MainGrid><div className="perps-section-1-bottom">{_body}</div></MainGrid>
    </div>
  );
}

export default main;
