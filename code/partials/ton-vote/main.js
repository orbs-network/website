import React from "react";
import SectionGrid from "../shared/SectionGrid";

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
