import React from "react";

function ToolItem({ _body, name }) {
  return (
    <div className="agentic-tool-item">
      <h4 className="agentic-tool-item-name">{name}</h4>
      <div className="agentic-tool-item-desc">{_body}</div>
    </div>
  );
}

export default ToolItem;
