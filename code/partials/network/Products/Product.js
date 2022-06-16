import React from "react";

function Product({ _body, img }) {
  return (
    <div className="network-products-product">
      <img src={img} className='network-products-product-logo' />
      {_body}
    </div>
  );
}

export default Product;
