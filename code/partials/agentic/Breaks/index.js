import React from "react";
import MainGrid from "../../shared/MainGrid";

function Breaks({ _body, cards }) {
  return (
    <div className="agentic-breaks">
      <MainGrid>
        <h2 className="agentic-section-title"><span className="agentic-gradient">WHAT BREAKS</span> WITHOUT THIS</h2>
        <div className="agentic-breaks-subtitle">{_body}</div>
        <div className="agentic-breaks-grid">
          {cards}
        </div>
      </MainGrid>
    </div>
  );
}

export default Breaks;
