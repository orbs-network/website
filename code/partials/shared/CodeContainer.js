import React from "react";

function CodeContainer({ left, code, copy }) {
  return (
    <div className="code-container">
      <div className="code-container-left">{left}</div>
      <div className="code-container-right">
        {copy}
        <pre>
          <code className="language-javascript">{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeContainer;
