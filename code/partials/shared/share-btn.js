import React from "react";
import Img from "./Img";

const ShareBtn = ({ url, src }) => {
  return (
    <a href={url} target="_blank">
      <Img src={src} />
    </a>
  );
};

export default ShareBtn;
