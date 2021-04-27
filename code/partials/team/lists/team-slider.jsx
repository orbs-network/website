import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import Img from "../../shared/Img";

const TeamSlider = ({ _relativeURL, _ID, slides, text }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="team-slider" data-aos={animations.fadeIn}>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          {slides &&
            slides.map((slide, index) => {
              return (
                <div class="swiper-slide" key={index}>
                  <Img src={generateUrl(slide)} className="swiper-slide-img" />
                </div>
              );
            })}
        </div>
        {/* <div class="swiper-pagination"></div> */}
      </div>
      {/* {text.ourOffice && <p className="team-slider-text">{text.ourOffice}</p>} */}
    </div>
  );
};

export default TeamSlider;
