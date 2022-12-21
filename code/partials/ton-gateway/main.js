import React from "react";

function TonGateway({ header, example, cards, posts, poweredByOrbs }) {
  return (
    <div className="ton-gateway page">
      {header}
      {cards}
      {example}
      {poweredByOrbs}

      {posts}
    </div>
  );
}

export default TonGateway;
