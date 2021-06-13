import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import { handleUrl } from "../../util/link";
import Img from "./Img";

const Slider = ({ _relativeURL, _ID, slides, copyright }) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <div className="slider" data-aos={animations.fadeIn}>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {slides &&
            slides.map((slide, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <Img
                    src={generateUrl(slide)}
                    className="swiper-slide-img"
                    alt="slide image"
                  />
                  {copyright && copyright}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
