import React from "react";
import MainGrid from "../../shared/MainGrid";

function Features({ _body, title, cards }) {
  return (
    <div className="ai-features">
      <MainGrid>
        <h3 className="ai-section-title">{title}</h3>
        <div className="ai-features-subtitle">{_body}</div>
        <div className="ai-features-grid">
          {cards}
        </div>
      </MainGrid>
    </div>
  );
}

export default Features;
