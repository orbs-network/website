import React from 'react'
import { handleUrl } from '../../../util/link';

function Slide({ _body, image, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="swiper-slide">
      <div className="swiper-slide-img">
        <img src={generateUrl(image)}  />
      </div>
      <div className="swiper-slide-body">{_body}</div>
    </div>
  );
}

export default Slide