import React from 'react'
import MainGrid from '../../shared/MainGrid'

function FlexSection({ _body, feature1, feature2 }) {
  return (
    <div className="network-section network-section-first">
      <MainGrid>
        <img
          className="network-section-image"
          src="../../../assets/img/network/network-first-section-orb.svg"
        />
        <div className="network-section-left network-section-text">{_body}</div>
      </MainGrid>
      <MainGrid className="network-section-first-features">
        {feature1}
        {feature2}
      </MainGrid>
    </div>
  )
}

export default FlexSection
