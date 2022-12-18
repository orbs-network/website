import React from "react";
import { handleUrl } from "../../../util/link";

function Card({ title, _body, text, button, image, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="ton-gateway-cards-card">
      <div className="card-container">
        <div className="card-top">
          <img src={generateUrl(image)} />
          <h3 className="card-title">{title}</h3>
          <div className="card-subtitle">{_body}</div>
          <button className="card-button">
            <p>{button}</p>
            <img
              className="card-img"
              src={generateUrl("/assets/img/ton-gateway/arrow-bottom.svg")}
            />
          </button>
        </div>
        <div className="card-body">{text}</div>
      </div>
    </div>
  );
}

export default Card;
