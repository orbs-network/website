import React from 'react'
import MainGrid from '../../shared/MainGrid'

function FlexSection({ _body, item1, item2, item3 }) {
  return (
    <div className="network-section network-section-how">
      <div className="network-section-how-text">{_body}</div>
      <MainGrid className="network-section-how-items">
        {item1}
        {item2}
        {item3}
      </MainGrid>
    </div>
  )
}

export default FlexSection
