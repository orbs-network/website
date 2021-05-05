import React from "react";

const SplittedLinesText = ({ text, className = "" }) => {
  const isList = Array.isArray(text);
  if (!text) {
    return "";
  }

  if (isList) {
    return text.map((e, index) => {
      return (
        <p className={className} key={index}>
          {e}
        </p>
      );
    });
  }

  return <p className={className}>{text}</p>;
};

export default SplittedLinesText;
