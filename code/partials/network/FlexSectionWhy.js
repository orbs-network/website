import React from 'react'
import SmallGrid from '../shared/SmallGrid'

function FlexSection({ _body }) {
  return (
    <div className="network-section network-section-why">
      <SmallGrid>
        <div className="network-section-why-text">{_body}</div>
      </SmallGrid>
    </div>
  )
}

export default FlexSection
