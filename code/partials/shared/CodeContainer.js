import React from "react";

function CodeContainer({ left, code, copiedText, generateUrl }) {
  return (
    <div className="code-container">
      <div id="get-started"></div>
      <div className="code-container-left">{left}</div>
      <div className="code-container-right">
        <div className="copy">
          <button>
            <img src={generateUrl("/assets/img/copy.svg")} />
          </button>
          <div className="copy-tooltip">{copiedText || "Copied!"}</div>
        </div>
        <pre>
          <code className="language-javascript">{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeContainer;
