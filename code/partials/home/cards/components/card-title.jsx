import React from "react";

const CardTitle = ({ title }) => {
  const isList = Array.isArray(title);
  if (!title) {
    return "";
  }
  if (isList) {
    return title.map((e) => {
      return <h3 className="card-title">{e}</h3>;
    });
  }

  return <h3 className="card-title">{title}</h3>;
};

export default CardTitle;
