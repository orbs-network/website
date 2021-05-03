import React from "react";
import { animations } from "../../../assets/js/consts/consts";

const generateClassName = (borderTop, borderBottom) => {
  let className = "expending-box expending-box-list";
  if (borderTop) {
    className += " expending-box-border-top";
  }
  if (borderBottom) {
    className += " expending-box-border-bottom";
  }
  return className;
};

const ExpendingList = ({
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
        <h4 className="expending-box-title">{title}</h4>
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
            aria-label="expend-text"
            className="expend-btn"
            data-open={`+ ${readMoreButton}`}
            data-close={`- ${readLessButton}`}
          >{`+ ${readMoreButton}`}</button>
        )}
      </div>
    </div>
  );
};

export default ExpendingList;
