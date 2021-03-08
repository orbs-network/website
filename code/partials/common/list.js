import React from "react";
import { animations } from "../../../assets/js/consts/consts";

const List = ({ _body, linesLimit, title, readMoreButton, readLessButton }) => {
  const style = { WebkitLineClamp: linesLimit };

  return (
    <div className="list-box" data-aos={animations.fadeTop}>
      {title && <h4>{title}</h4>}
      <ul
        className={
          linesLimit
            ? "text-box-base-text limited-lines "
            : "text-box-base-text"
        }
        style={linesLimit ? style : null}
      >
        {_body}
      </ul>
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

export default List;
