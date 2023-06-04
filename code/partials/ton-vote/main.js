import React from "react";

function TonVote({ header, toolCards, slider, partners, bottom }) {
  return (
    <div className="ton-vote page">
      {header}
      {toolCards}
      {slider}
      {partners}
      {bottom}
    </div>
  );
}

export default TonVote;
