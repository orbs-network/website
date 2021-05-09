import React from "react";

const FaqCategoriesList = ({ sections }) => {
  return (
    <div className="faq-lists">
      {sections &&
        sections.map((section, i) => {
          const { title, list } = section;
          return (
            <section className="faq-lists-category" key={`${title}-${i}`}>
              <aside className="indicator" id={title}></aside>
              <h5>{title}</h5>
              <ul>{list}</ul>
            </section>
          );
        })}
    </div>
  );
};

export default FaqCategoriesList;
