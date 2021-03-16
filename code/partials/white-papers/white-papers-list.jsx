import React from "react";
import { animations } from "../../../assets/js/consts/consts";

const WhitePaperslist = ({ list, title }) => {
  return (
    <div className="white-paper-list">
      <h1 className="white-paper-list-title">{title}</h1>
      <div className="white-paper-list-flex">
        {list &&
          list.map((category) => {
            return (
              <div className="white-paper-category">
                <section
                  className="white-paper-category-title"
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
