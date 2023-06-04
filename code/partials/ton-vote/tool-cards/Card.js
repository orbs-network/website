import React from "react";

function Card({ img, title, _body }) {
  return (
    <div className="ton-vote-tool">
      {img && <img src={img} className="ton-vote-tool-img" />}
      <p className="ton-vote-tool-body">{_body}</p>
    </div>
  );
}

export default Card;
