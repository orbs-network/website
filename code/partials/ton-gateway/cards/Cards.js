import React from "react";
import MainGrid from "../../shared/MainGrid";

function Cards({ list }) {
  return (
    <div className="ton-gateway-cards">
      <MainGrid>
        <div className="list">{list}</div>
      </MainGrid>
    </div>
  );
}

export default Cards;
