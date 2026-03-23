import React from "react";

function Card({ _body, label, url }) {
  const isExternal = url && url.startsWith("http");

  return (
    <a href={url} className="agentic-cta-card" target={isExternal ? "_blank" : undefined}>
      <span className="agentic-cta-card-btn">{label}</span>
      <div className="agentic-cta-card-desc">{_body}</div>
    </a>
  );
}

export default Card;
