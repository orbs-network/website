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
  linesLimit,
  title,
  readMoreButton,
  readLessButton,
  border,
  borderBottom,
}) => {
  const style = { WebkitLineClamp: linesLimit };

  return (
    <div
      className={generateClassName(border, borderBottom)}
      data-aos={animations.fadeTop}
    >
      <div className="expending-box-content">
        <h5 className="expending-box-title">{title}</h5>
        <div
          className={
            linesLimit
              ? "expending-box-text limited-lines "
              : "expending-box-text"
          }
          style={linesLimit ? style : null}
        >
          {_body}
        </div>

        {linesLimit && (
          <button
            className="expend-btn"
            data-open={`+ ${readMoreButton}`}
            data-close={`- ${readLessButton}`}
          >{`+ ${readMoreButton}`}</button>
        )}
      </div>
    </div>
  );
};

export default ExpendableTextBox;
