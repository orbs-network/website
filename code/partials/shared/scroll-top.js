import React from "react";
import { images } from "../../../assets/js/images";
import Img from "./Img";

const ScrollTop = ({ generateUrl }) => {
  return (
    <button className="scroll-top">
      <Img src={generateUrl(images.common.up)} />
    </button>
  );
};

export default ScrollTop;
