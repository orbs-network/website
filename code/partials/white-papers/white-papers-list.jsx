import React from "react";
import { animations } from "../../../assets/js/consts/consts";

const WhitePaperslist = ({ list }) => {
  return (
    <div className="white-papers-list">
      {list &&
        list.map((category, index) => {
          return (
            <div className="white-papers-category" key={index}>
              <section
                className="white-papers-category-title"
                data-aos={animations.fadeIn}
              >
                {category.title}
              </section>
              {category.list}
            </div>
          );
        })}
    </div>
  );
};

export default WhitePaperslist;
