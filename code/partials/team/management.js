import React, { Component } from "react";
import { animations } from "../../../assets/js/consts/consts";
import Img from "../../common-components/Img";
import Teammate from "./teammate";

const Management = ({ _relativeURL, _ID, management, slides, text }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="team-list-section team-list-section-managers">
      {text.topText && (
        <h5 className="team-list-section-title">{text.topText}</h5>
      )}
      <ul className="team-list managers-list">
        {management &&
          management.map((manager) => {
            return <Teammate data={manager} generateUrl={generateUrl} />;
          })}
      </ul>
      <figure className="team-list-slider" data-aos={animations.fadeTop}>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            {slides &&
              slides.map((slide) => {
                return (
                  <div class="swiper-slide">
                    <Img src={slide} className="swiper-slide-img" />
                  </div>
                );
              })}
          </div>
          <div class="swiper-pagination"></div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        {text.ourOffice && (
          <p className="team-list-slider-text">{text.ourOffice}</p>
        )}
      </figure>
    </section>
  );
};

export default Management;
