import React from 'react'

function Graph1({title, _body, image}) {
  return (
    <div className="orbs-vm-graph orbs-vm-graph-1">
      <img
        src="../../../assets/img/network/section-3-left.png"
        className="orbs-vm-graph-bg"
      />
      <div className="orbs-vm-graph-grid">
        <h3>{title}</h3>

        <img src={image} className="orbs-vm-graph-image" />
        <div className="orbs-vm-graph-body">{_body}</div>
      </div>
    </div>
  );
}

export default Graph1