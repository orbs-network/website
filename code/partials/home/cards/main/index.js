import React from 'react'
import { handleUrl } from '../../../../util/link'

const Contributor = ({
  title,
  icon,
  _body,
  lat,
  lng,
  countryCode,
  links,
  type,
  image,
  _relativeURL,
  socials,
  _ID,
}) => {
  return (
    <div
      className={`card ${image ? 'card-with-image' : ''}`}
      data-countrycode={countryCode}
      data-lng={lng}
      data-lat={lat}
      data-title={title}
    >
      {image && (
        <div className="card-image">
          <div className="card-image-border"></div>
          <img src={handleUrl(image, _relativeURL, _ID)} />
        </div>
      )}
      <div className="card-content">
        <div className="card-tooltip">
          {icon && <img src={handleUrl(icon, _relativeURL, _ID)} />}
          <div className="card-tooltip-label">{type}</div>
        </div>
        <div className="card-title">
          <span className="card-title-text">{title}</span>
        </div>
        {socials}
        <div className="card-body-text">{_body}</div>
        <div className="card-links">{links}</div>
      </div>
    </div>
  )
}

export default Contributor
