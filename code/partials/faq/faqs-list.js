import React from "react";
import OpeningBox from "../common/opening-box";

const FaqsList = ({ list, title }) => {
  return (
    <div id={title}>
      <h5>{title}</h5>
      <ul>
        {list &&
          list.map((faq) => {
            return <OpeningBox text={faq._body} title={faq.title} />;
          })}
      </ul>
    </div>
  );
};

export default FaqsList;
