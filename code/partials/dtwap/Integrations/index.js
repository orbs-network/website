import React from 'react'
import MainGrid from '../../shared/MainGrid';

function Integrations({title, list, integrate}) {
  return (
    <div className="dtwap-integrations">
      <MainGrid>
        <h3 className="dtwap-integrations-title">{title}</h3>
        <div className="dtwap-integrations-list">{list}</div>
        {integrate}
      </MainGrid>
    </div>
  );
}

export default Integrations