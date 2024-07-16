import React from 'react'

function FlexSection({ _body, product1, product2, product3, product4 }) {
  return (
    <div className="network-section network-section-products">
      {_body}

      <div className="network-section-products-list">
        {product1}
        {product2}
        {product3}
        {product4}
      </div>
    </div>
  )
}

export default FlexSection
