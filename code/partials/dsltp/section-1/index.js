import React from "react";
import MainGrid from "../../shared/MainGrid";

function main({ cards, _body }) {
  return (
    <div className="dsltp-section-1 dsltp-section">{cards}
    <MainGrid><div className="dsltp-section-1-bottom">{_body}</div></MainGrid>
    </div>
  );
}

export default main;
