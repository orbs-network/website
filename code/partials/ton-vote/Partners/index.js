import React from 'react'
import SectionGrid from '../../shared/SectionGrid';
import SectionTitle from '../../shared/SectionTitle'

function Partners({title, partners}) {
  return (
    <div className="ton-vote-partners">
      <SectionGrid>
        <SectionTitle title={title} />
        <div className="ton-vote-partners-list">{partners}</div>
      </SectionGrid>
    </div>
  );
}

export default Partners