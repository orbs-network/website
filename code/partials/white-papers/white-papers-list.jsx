import React from "react";
import { animations } from "../../../assets/js/consts/consts";

const WhitePaperslist = ({ list }) => {
  return (
    <div className="white-papers-list">
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
  );
};

export default WhitePaperslist;
