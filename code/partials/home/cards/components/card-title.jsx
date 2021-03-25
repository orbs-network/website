import React from "react";

const CardTitle = ({ title, oneLine }) => {
  const isList = Array.isArray(title);
  if (!title) {
    return "";
  }
  if (oneLine) {
    let result = "";
    title.map((e) => {
      return (result += ` ${e}`);
    });
    return <h3 className="card-title">{result}</h3>;
  }
  if (isList) {
    return title.map((e) => {
      return <h3 className="card-title">{e}</h3>;
    });
  }

  return <h3 className="card-title">{title}</h3>;
};

export default CardTitle;
