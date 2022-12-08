import React from 'react'

function Graph2({ title, _body, image }) {
  return (
    <div className="orbs-vm-graph orbs-vm-graph-2">
      <div className="orbs-vm-graph-grid">
        <h3>{title}</h3>
        <img src={image} className="orbs-vm-graph-image" />
        <div className="orbs-vm-graph-body">{_body}</div>
      </div>
    </div>
  );
}

export default Graph2