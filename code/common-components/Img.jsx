import React from "react";

const Img = ({ src, placeholder, className, alt, title }) => {
  return (
    <img
      title={title}
      src={src || placeholder}
      className={className}
      alt={alt}
    />
  );
};
Img.getInitialProps = async function (props) {
  const {
    src,
    placeholder,
    className,
    alt,
    title,
  } = await FetchMyDataFromSomewhere(props._ID);
  return { src, placeholder, className, alt, title };
};
export default Img;
