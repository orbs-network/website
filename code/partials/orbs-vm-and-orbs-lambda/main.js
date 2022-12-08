import React from 'react'

function Main({ _body, products, graphs }) {
  return (
    <div className="orbs-vm">
      <header className="header orbs-vm-header">{_body}</header>
      <div className="orbs-vm-products">{products}</div>
      <div className="orbs-vm-graphs">{graphs}</div>
    </div>
  );
}

export default Main