import React from "react";

const Img = ({ src, placeholder, className, alt, title }) => {
  const imgUrl = src || placeholder;
  return imgUrl ? (
    <img title={title} src={imgUrl} className={className} alt={alt} />
  ) : null;
};

export default Img;
