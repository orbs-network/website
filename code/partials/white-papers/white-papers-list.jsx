import React from "react";
import { animations } from "../../../assets/js/consts/consts";

const WhitePaperslist = ({ list, title }) => {
  return (
    <div className="white-papers-list">
      <h1 className="white-papers-list-title">{title}</h1>
      <div className="white-papers-list-flex">
        {list &&
          list.map((category) => {
            return (
              <div className="white-papers-category">
                <section
                  className="white-papers-category-title"
                  data-aos={animations.fadeIn}
                >
                  {category.title}
                </section>
                {category.whitePapers}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WhitePaperslist;
