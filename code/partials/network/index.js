import React from "react";

const Network = ({
  first_section,
  second_section,
  third_section,
  products,
  _body,
  product_images_1,
  product_images_2
}) => {
  return (
    <main className="network">
      <header className="header network-header">{_body}</header>
      <img className="network-figure network-figure-left" src = '/assets/img/network/big-figure-left.png' />
      {first_section}
      {second_section}
      {third_section}
      {products}
      <div className="network-product-images">
      {product_images_1}
      {product_images_2}
      </div>
    </main>
  );
};

export default Network;
