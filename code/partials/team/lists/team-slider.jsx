import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import Img from "../../common/Img";

const TeamSlider = ({ _relativeURL, _ID, slides, text }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="team-slider" data-aos={animations.fadeTop}>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          {slides &&
            slides.map((slide) => {
              return (
                <div class="swiper-slide">
                  <Img src={generateUrl(slide)} className="swiper-slide-img" />
                </div>
              );
            })}
        </div>
        <div class="swiper-pagination"></div>
      </div>
      {text.ourOffice && <p className="team-slider-text">{text.ourOffice}</p>}
    </div>
  );
};

export default TeamSlider;
