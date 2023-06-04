import React from 'react'
import MainGrid from '../../shared/MainGrid'
import SectionGrid from '../../shared/SectionGrid';
import SectionTitle from '../../shared/SectionTitle';

function ToolsCards({ cards, title }) {
  return (
    <div className="ton-vote-tools">
      <SectionGrid>
        <SectionTitle title={title} />
        <div className="ton-vote-tools-list">{cards}</div>
      </SectionGrid>
    </div>
  );
}

export default ToolsCards