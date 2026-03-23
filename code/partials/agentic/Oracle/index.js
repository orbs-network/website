import React from "react";
import MainGrid from "../../shared/MainGrid";

function Oracle({ _body, statement }) {
  return (
    <div className="agentic-oracle">
      <MainGrid>
        <h2 className="agentic-oracle-label"><span className="agentic-oracle-label-pink">THE COSIGNED</span> ORACLE</h2>
        <div className="agentic-oracle-flex">
          <div className="agentic-oracle-left">
            <p className="agentic-oracle-statement">{statement}</p>
          </div>
          <div className="agentic-oracle-right">
            {_body}
          </div>
        </div>
      </MainGrid>
    </div>
  );
}

export default Oracle;
