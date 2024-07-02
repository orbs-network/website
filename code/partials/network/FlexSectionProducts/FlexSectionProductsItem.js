import React from 'react'
import { handleUrl } from '../../../util/link'

function Product({ _body, image, _relativeURL, _ID, className }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID)
  }
  return (
    <div className={`network-section-products-list-item ${className ?? ''}`}>
      <img
        className="network-section-products-list-item-image"
        src={generateUrl(image)}
      />
      <div className="network-section-products-list-item-body">{_body}</div>
    </div>
  )
}

export default Product
