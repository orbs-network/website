import React from "react";
import MainGrid from "../shared/MainGrid";

function Graph2({ title, _body, image }) {
  return (
    <div className="orbs-vm-graph orbs-vm-graph-2">
      <MainGrid className="orbs-vm-graph-grid">
        <h3>{title}</h3>
        <img src={image} className="orbs-vm-graph-image" />
        <div className="orbs-vm-graph-body">{_body}</div>
      </MainGrid>
    </div>
  );
}

export default Graph2;
