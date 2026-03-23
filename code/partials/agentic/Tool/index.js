import React from "react";
import MainGrid from "../../shared/MainGrid";

function Tool({ _body, tools }) {
  return (
    <div className="agentic-tool">
      <MainGrid>
        <h2 className="agentic-section-title"><span className="agentic-gradient">Executional</span> Tool</h2>
        <div className="agentic-tool-subtitle">{_body}</div>
        <div className="agentic-tool-flex">
          <div className="agentic-tool-list">
            {tools}
          </div>
          <div className="agentic-tool-code-wrap">
            <pre className="agentic-tool-code"><code><span className="c-obj">orbs</span>.<span className="c-fn">autoswap</span>{"({"}{"\n"}{"  "}token_in: <span className="c-str">"USDC"</span>,{"\n"}{"  "}token_out: <span className="c-str">"ETH"</span>,{"\n"}{"  "}amount: <span className="c-num">1000</span>,{"\n"}{"  "}max_slippage: <span className="c-num">0.5</span>{"\n"}{"})"}</code></pre>
            <p className="agentic-tool-code-caption">→ Routed, verified, cosigned, executed. One call.</p>
          </div>
        </div>
      </MainGrid>
    </div>
  );
}

export default Tool;
