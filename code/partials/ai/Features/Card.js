import React from "react";

function FeatureCard({ _body, icon, title }) {
  return (
    <div className="ai-feature-card">
      <div className="ai-feature-icon">{icon}</div>
      <h4 className="ai-feature-title">{title}</h4>
      <div className="ai-feature-desc">{_body}</div>
    </div>
  );
}

export default FeatureCard;
