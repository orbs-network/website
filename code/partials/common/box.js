import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import Img from "./Img";

const Box = ({ _body, image }) => {
  return (
    <div className="box" data-aos={animations.fadeTop}>
      {_body}
      <figure>
        <Img src={image} />
      </figure>
    </div>
  );
};

export default Box;
