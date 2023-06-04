
import React from 'react'
import { handleUrl } from '../../../util/link';

function Slider({ _relativeURL, _ID, slides }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="swiper mySwiper">
      <div className="swiper-wrapper">{slides}</div>
      <div className="swiper-bottom">
        <div className="swiper-button-prev navigation-btn">
          <img src={generateUrl("/assets/img/dtwap/left-arrow.svg")} />
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next navigation-btn">
          <img src={generateUrl("/assets/img/dtwap/right-arrow.svg")} />
        </div>
      </div>
    </div>
  );
}

export default Slider