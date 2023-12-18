import React from 'react'
import MainGrid from '../../shared/MainGrid';
function index({ list, title }) {
  return (
    <div className="liquidity-hub-section liquidity-hub-launch-partners">
      <MainGrid>
        <h3 className="page-colored-section-title">{title}</h3>
        <div className="liquidity-hub-launch-partners-list">{list}</div>
      </MainGrid>
    </div>
  );
}

export default index