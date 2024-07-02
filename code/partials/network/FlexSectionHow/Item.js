import React from 'react'
import { handleUrl } from '../../../util/link'

export default function Item({ _body, image, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID)
  }
  return (
    <div className="network-section-how-items-item">
      <img
        className="network-section-how-items-item-image"
        src={generateUrl(image)}
      />
      {_body}
    </div>
  )
}
