import React from 'react'
import MainGrid from '../MainGrid'

function Integrations({title, list, integrate}) {
  return (
    <div className="integrations">
      <MainGrid>
        <h3 className="integrations-title">{title}</h3>
        <div className="integrations-list">{list}</div>
        {integrate}
      </MainGrid>
    </div>
  );
}

export default Integrations