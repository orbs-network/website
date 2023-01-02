import React from "react";
import SmallGrid from "../shared/SmallGrid";

function Graph2({ title, _body, image }) {
  return (
    <div className="orbs-vm-graph orbs-vm-graph-2">
      <SmallGrid className="orbs-vm-graph-grid">
        <h3>{title}</h3>
        <img src={image} className="orbs-vm-graph-image" />
        <div className="orbs-vm-graph-body">{_body}</div>
      </SmallGrid>
    </div>
  );
}

export default Graph2;
