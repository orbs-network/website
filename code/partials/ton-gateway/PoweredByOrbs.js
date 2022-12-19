import React from 'react'
import MainGrid from '../shared/MainGrid';

function PoweredByOrbs({title, _body}) {
  return (
    <div className="ton-gateway-powered">
      <MainGrid>
        <h3>{title}</h3>
        <div className="ton-gateway-powered-body">{_body}</div>
      </MainGrid>
    </div>
  );
}

export default PoweredByOrbs