import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import Img from "../Img";

const Box = ({ _body, image, _ID, _relativeURL }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <li className="box" data-aos={animations.fadeTop}>
      {_body}
      <figure>
        <Img src={generateUrl(image)} />
      </figure>
    </li>
  );
};

export default Box;
