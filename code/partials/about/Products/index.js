import React from "react";

function Products({ title, subTitle, products }) {
  return (
    <div className="about-products">
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <div className="about-products-flex">{products}</div>
    </div>
  );
}

export default Products;
