import React from "react";

function Step({ _body, number, title, optional }) {
  return (
    <div className={`ai-how-step${optional ? ' ai-how-step--optional' : ''}`}>
      <div className="ai-how-step-num">{number}</div>
      <h4 className="ai-how-step-title">
        {title}
        {optional && <span className="ai-how-step-badge">Optional</span>}
      </h4>
      <div className="ai-how-step-desc">{_body}</div>
    </div>
  );
}

export default Step;
