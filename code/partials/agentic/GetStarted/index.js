import React from "react";
import MainGrid from "../../shared/MainGrid";

function GetStarted({ title, disclaimer, cards }) {
  return (
    <div className="agentic-cta">
      <MainGrid>
        <h2 className="agentic-cta-title">{title}</h2>
        <div className="agentic-cta-grid">
          {cards}
        </div>
        {disclaimer && <p className="agentic-cta-disclaimer">{disclaimer}</p>}
      </MainGrid>
    </div>
  );
}

export default GetStarted;
