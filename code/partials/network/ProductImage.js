import React from "react";

function ProductImage({ _body, img, id }) {
  return (
    <div className={`network-product-image network-product-image-${id}`}>
      {_body}
      <img src={img} />
    </div>
  );
}

export default ProductImage;
