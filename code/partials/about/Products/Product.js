import React from "react";

function Product({ _body, img }) {
  return (
    <div className="about-products-product">
      <img src={img} />
      {_body}
    </div>
  );
}

export default Product;
