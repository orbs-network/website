import React from 'react'
import MainGrid from '../../shared/MainGrid';

function main({ boxes, text1, text2, diagram }) {
  return (
    <div className="liquidity-hub-section-1 liquidity-hub-section">
      <MainGrid>
        {text1}
        {boxes}
        {text2}
        {diagram}
      </MainGrid>
    </div>
  );
}

export default main