import React from 'react'

function TonGateway({ header, example, cards, posts, poweredByOrbs }) {
  return (
    <div className="ton-gateway">
      {header}
      {cards}
      {example}
      {posts}
      {poweredByOrbs}
    </div>
  );
}

export default TonGateway