import React, { Fragment } from "react";
import { animations } from "../../../assets/js/consts/consts";

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
  const parentStyle = {
    borderTop: border ? "1px solid #707070" : "none",
    paddingTop: border ? "30px" : "0px",
    borderBottom: borderBottom ? "1px solid #707070" : "none",
    paddingBottom: borderBottom ? "30px" : "0px",
  };
  return (
    <div
      className="text-with-title"
      data-aos={animations.fadeTop}
      style={parentStyle}
    >
      <h5>{title}</h5>
      <div
        className={
          linesLimit
            ? "text-box-base-text limited-lines "
            : "text-box-base-text"
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
  );
};

export default ExpendableTextBox;
