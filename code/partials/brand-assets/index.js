import React from 'react'
import MainGrid from '../shared/MainGrid';
function Main({ _body, list, buttonText }) {
  return (
    <div className="brand-assets page">
      <MainGrid>
        <div className="header">{_body}</div>
        <div className="brand-assets-list">
          {list}
          <div className="brand-asset"> </div>
        </div>
      <button className="brand-assets-download-all filled-button">
          {buttonText}
        </button>
      </MainGrid>
    </div>
  );
}

export default Main