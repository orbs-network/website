import React from "react";
import { removeSpaces } from "../../assets/js/common";
import OpeningBox from "../partials/common/opening-box";

const FaqSection = ({ category }) => {
  return (
    <section className="faq-lists-category">
      <div
        id={removeSpaces(category.name, "-")}
        className="faq-lists-category-indicator"
      />
      <h5>{category.name}</h5>
      <ul>
        {category.list.map(({ text, title }) => {
          return (
            <OpeningBox text={text} title={title} color={category.border} />
          );
        })}
      </ul>
    </section>
  );
};

export default FaqSection;
