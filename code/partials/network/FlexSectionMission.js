import React from 'react'
import SmallGrid from '../shared/SmallGrid'

function FlexSection({ _body }) {
  return (
    <div className="network-section network-section-mission">
      <SmallGrid>
        <div className="network-section-mission-text">{_body}</div>
      </SmallGrid>
    </div>
  )
}

export default FlexSection
