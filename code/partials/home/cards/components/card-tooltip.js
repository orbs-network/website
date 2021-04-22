import React from "react";
import Img from "../../../shared/Img";

const CardTooltip = ({ type, img }) => {
  return (
    <aside className="card-type">
      <p> {type}</p>
      <Img src={img} />
    </aside>
  );
};

export default CardTooltip;
