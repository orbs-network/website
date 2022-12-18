import React from "react";
import MainGrid from "../../shared/MainGrid";

function Exmpales({ selectors, github_text, telegrem_text }) {
  return (
    <div className="ton-gateway-example">
      <MainGrid>
        <div className="ton-gateway-example-flex">
          <div className="ton-gateway-example-options">{selectors}</div>
          <div className="ton-gateway-example-code">
            <div className="ton-gateway-example-copy">
              <button>Copy</button>
              <div className="ton-gateway-example-copy-tooltip">Copied!</div>
            </div>
            <pre>
              <code className="language-javascript ton-gateway-hljs"></code>
            </pre>
          </div>
        </div>
        <div className="ton-gateway-example-links">
          <a href="/">{github_text}</a>
          <a href="/">{telegrem_text}</a>
        </div>
      </MainGrid>
    </div>
  );
}

export default Exmpales;
