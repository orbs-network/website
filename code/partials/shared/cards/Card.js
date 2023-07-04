import React from "react";

function Card({ img, _body }) {
  return (
    <div className="cards-card">
      {img && <img src={img} className="cards-card-img" />}
      <p className="cards-card-body">{_body}</p>
    </div>
  );
}

export default Card;
