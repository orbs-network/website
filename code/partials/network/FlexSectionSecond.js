import React from 'react'
import MainGrid from '../shared/MainGrid'

function FlexSection({ _body }) {
  return (
    <div className="network-section network-section-second">
      <MainGrid>
        <img
          className="network-section-image"
          src="../../../assets/img/network/network-second-section-tiers.png"
        />

        <div className="network-section-right network-section-text">
          {_body}
        </div>
      </MainGrid>
    </div>
  )
}

export default FlexSection
