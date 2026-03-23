import React from "react";
import MainGrid from "../../shared/MainGrid";

function Powered({ _body }) {
  return (
    <div className="agentic-powered">
      <MainGrid>
        <h2 className="agentic-powered-title">
          <span className="agentic-powered-title-gradient">Powered by </span>Orbs Network
        </h2>
        <div className="agentic-powered-body">{_body}</div>
      </MainGrid>
    </div>
  );
}

export default Powered;
