import React from "react";

const TextBoxBase = ({ customClassName = "", section }) => {
  const { title, linesLimit, text } = section;
  const style = { WebkitLineClamp: linesLimit };
  return (
    <div className="text-box-base">
      <h4 className="text-box-base-title">{title}</h4>
      <p
        className={
          linesLimit
            ? "text-box-base-text limited-lines "
            : "text-box-base-text"
        }
        style={linesLimit ? style : null}
      >
        {text}
      </p>
      {linesLimit && (
        <button className="text-box-base-expend">Read more</button>
      )}
    </div>
  );
};
TextBoxBase.getInitialProps = async function (props) {
  const { customClassName, section } = await FetchMyDataFromSomewhere(
    props._ID
  );
  return { customClassName, section };
};

export default TextBoxBase;
