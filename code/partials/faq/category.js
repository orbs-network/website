import React from "react";

const Category = ({ title, list }) => {
  return (
    <section className="faq-lists-category">
      <aside className="indicator" id={title}></aside>
      <small>{title}</small>
      <h5>{title}</h5>
      <ul>{list}</ul>
    </section>
  );
};

export default Category;
