import React from "react";

const ReadMoreBtn = ({ text }) => {
  return (
    <button aria-label="expend-text" className="expend-btn read-more-btn">
      {text}
    </button>
  );
};

export default ReadMoreBtn;
