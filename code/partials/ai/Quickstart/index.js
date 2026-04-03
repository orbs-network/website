import React from "react";
import MainGrid from "../../shared/MainGrid";

function Quickstart({ _body, title, cards }) {
  return (
    <div className="ai-quickstart" id="quickstart">
      <MainGrid>
        <h3 className="ai-section-title">{title}</h3>
        <div className="ai-quickstart-subtitle">{_body}</div>
        <div className="ai-quickstart-grid">
          {cards}
        </div>
      </MainGrid>
    </div>
  );
}

export default Quickstart;
