import React from "react";
import { animations } from "../../../assets/js/consts/consts";

const generateClassName = (borderTop, borderBottom) => {
  let className = "expending-box";
  if (borderTop) {
    className += " expending-box-border-top";
  }
  if (borderBottom) {
    className += " expending-box-border-bottom";
  }
  return className;
};

const ExpendableTextBox = ({
  _body,

  title,
  readMoreButton,
  readLessButton,
  border,
  borderBottom,
  extra,
}) => {
  return (
    <div
      className={generateClassName(border, borderBottom)}
      data-aos={animations.fadeTop}
    >
      <div className="expending-box-content">
        <h4 className="expending-box-title">{title}</h4>

        <div className="expending-box-text">
          <section className="expending-box-text-full">{_body}</section>
          {extra && (
            <section className="expending-box-text-more">{extra}</section>
          )}
        </div>
        {extra && (
          <React.Fragment>
            {readMoreButton}
            {readLessButton}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default ExpendableTextBox;
