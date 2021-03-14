import React, { Fragment } from "react";
import { animations } from "../../../assets/js/consts/consts";

const TextWithTitle = ({
  _body,
  linesLimit,
  title,
  readMoreButton,
  readLessButton,
  border,
}) => {
  const style = { WebkitLineClamp: linesLimit };
  const parentStyle = {
    borderBottom: border ? "1px solid #707070" : "none",
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

export default TextWithTitle;
