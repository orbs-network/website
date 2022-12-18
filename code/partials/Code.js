import React from "react";


function Code({ markdown }) {
  return (
    <div className="code">
      <pre>
        <code className="language-javascript">{markdown}</code>
      </pre>
    </div>
  );
}

export default Code;
