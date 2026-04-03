import React from "react";
import MainGrid from "../../shared/MainGrid";

function HowItWorks({ _body, title, steps }) {
  return (
    <div className="ai-how-it-works">
      <MainGrid>
        <h3 className="ai-section-title">{title}</h3>
        <div className="ai-how-subtitle">{_body}</div>
        <div className="ai-how-steps">
          {steps}
        </div>
      </MainGrid>
    </div>
  );
}

export default HowItWorks;
