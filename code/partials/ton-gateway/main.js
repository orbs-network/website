import React from "react";

function TonGateway({ header, example, cards, posts, schema }) {
  return (
    <div className="ton-gateway page">
      {header}
      {cards}
      {example}
      {schema}

      {posts}
    </div>
  );
}

export default TonGateway;
