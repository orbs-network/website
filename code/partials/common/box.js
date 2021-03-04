import React from "react";

const Box = ({ _body, image }) => {
  return (
    <div className="box">
      {_body}
      <figure>{image && <img src={image} />}</figure>
    </div>
  );
};

export default Box;
