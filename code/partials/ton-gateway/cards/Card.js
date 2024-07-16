import React from "react";
import { handleUrl } from "../../../util/link";

function Card({ title, _body, text, button, image, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="ton-gateway-cards-card">
      
      <div className="ton-gateway-cards-card-top">
        <img src={generateUrl(image)} />
        <h3 className="ton-gateway-cards-card-title">{title}</h3>
        <div className="ton-gateway-cards-card-subtitle">{_body}</div>
        <div className="ton-gateway-cards-card-button">
          <div className="ton-gateway-cards-card-button-content">
            <p>{button}</p>
            <img
              className="ton-gateway-cards-card-img"
              src={generateUrl("/assets/img/ton-gateway/arrow-bottom.svg")}
            />
          </div>
          <div className="ton-gateway-cards-card-body">{text}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
