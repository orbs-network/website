import React from 'react'
import SectionGrid from '../shared/SectionGrid'
import SectionTitle from '../shared/SectionTitle'

function Bottom({ title, _body }) {
  return (
    <div className="ton-vote-bottom">
      <SectionGrid>
        <SectionTitle title={title} />
        <div className="ton-vote-bottom-body">{_body}</div>
      </SectionGrid>
    </div>
  );
}

export default Bottom