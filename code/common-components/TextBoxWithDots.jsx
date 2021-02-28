import React from "react";
import TextBoxBase from "./TextBoxBase";

const TextBoxWithDots = ({ section, customClassName = "" }) => {
  const { dots, linesLimit } = section;
  const style = { WebkitLineClamp: linesLimit };
  return (
    <div className="text-box text-box-with-dots">
      <TextBoxBase section={{ ...section, linesLimit: false }} />
      <ul
        className={
          linesLimit
            ? "text-box-base-text limited-lines "
            : "text-box-base-text"
        }
        style={linesLimit ? style : null}
      >
        {dots.map((dot) => {
          return <li>{dot}</li>;
        })}
      </ul>
      {linesLimit && (
        <button className="text-box-base-expend">Read more</button>
      )}
    </div>
  );
};
TextBoxWithDots.getInitialProps = async function (props) {
  const { customClassName, section } = await FetchMyDataFromSomewhere(
    props._ID
  );
  return { customClassName, section };
};

export default TextBoxWithDots;
