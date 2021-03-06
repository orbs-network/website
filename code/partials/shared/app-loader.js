import React from "react";
import { images } from "../../../assets/js/images";
import Img from "./Img";

const AppLoader = ({ generateUrl }) => {
  return (
    <div className="app-loader" style={{ opacity: 0 }}>
      <Img src={generateUrl(images.common.appLoader)} />
    </div>
  );
};

export default AppLoader;
