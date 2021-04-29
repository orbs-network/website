import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import Img from "./Img";

const Slider = ({ _relativeURL, _ID, slides }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };

  return (
    <div className="slider" data-aos={animations.fadeIn}>
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
      </div>
    </div>
  );
};

export default Slider;
