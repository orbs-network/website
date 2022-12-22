import React from "react";
import MainGrid from "../shared/MainGrid";

function Main({ _body, products, graphs }) {
  return (
    <div className="orbs-vm page">
      <MainGrid>
        <header className="header orbs-vm-header">{_body}</header>
      </MainGrid>
      <div className="orbs-vm-products">{products}</div>
      <div className="orbs-vm-graphs">{graphs}</div>
    </div>
  );
}

export default Main;
