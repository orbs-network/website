import React, { Fragment } from "react";
import { animations } from "../../../assets/js/consts/consts";

const TextWithTitle = ({
  _body,
  linesLimit,
  title,
  readMoreButton,
  readLessButton,
}) => {
  const style = { WebkitLineClamp: linesLimit };
  return (
    <div className="text-with-title" data-aos={animations.fadeTop}>
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
