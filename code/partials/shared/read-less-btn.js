import React from "react";

const ReadLessBtn = ({ text }) => {
  return (
    <button aria-label="expend-text" className="expend-btn read-less-btn">
      {text}
    </button>
  );
};

export default ReadLessBtn;
