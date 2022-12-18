import React from 'react'

function TonGateway({ header, example, cards }) {
  return (
    <div className="ton-gateway">
      {header}
      {cards}
      {example}
    </div>
  );
}

export default TonGateway