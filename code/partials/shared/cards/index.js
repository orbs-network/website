import React from 'react'
import MainGrid from '../MainGrid'
import SectionGrid from '../SectionGrid';
import SectionTitle from '../SectionTitle';

function ToolsCards({ cards, title, _body }) {
  return (
    <div className="cards">
      <SectionGrid>
        {title && <SectionTitle title={title} />}
        {_body && <div className="cards-subtitle"> {_body}</div>}
        <div className="cards-list">{cards}</div>
      </SectionGrid>
    </div>
  );
}

export default ToolsCards