import React from "react";

function Products({ title, subTitle, products, _body }) {
  return (
    <div className="network-products">
      <div className="network-products-header">{_body}</div>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <div className="network-products-flex">{products}</div>
    </div>
  );
}

export default Products;
