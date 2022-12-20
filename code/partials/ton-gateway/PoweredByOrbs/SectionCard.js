import React from "react";

function SectionCard({ _body, text }) {
  return (
    <div className="ton-gateway-powered-section-card">
      {text && <p className="ton-gateway-powered-section-card-title">{text}</p>}
      <div className="ton-gateway-powered-section-card-colored">
        <figure />
        <div className="ton-gateway-powered-section-card-body">{_body}</div>
      </div>
    </div>
  );
}

export default SectionCard;
