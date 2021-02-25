import React from "react";
import { removeSpaces } from "../../assets/js/common";
import FaqElement from "./FaqElement";

const FaqSection = ({ category }) => {
  return (
    <section className="faq-lists-category">
      <div
        id={removeSpaces(category.name, "-")}
        className="faq-lists-category-indicator"
      />
      <h5>{category.name}</h5>
      <ul>
        {category.list.map((faq) => {
          return <FaqElement faq={faq} border={category.border} />;
        })}
      </ul>
    </section>
  );
};
FaqElement.getInitialProps = async function (props) {
  const category = await FetchMyDataFromSomewhere(props._ID);
  return { category };
};
export default FaqSection;
