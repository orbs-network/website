import React from "react";

const OpeningBox = ({ _body, title, color = "#E61EA9" }) => {
  const borderStyle = `2px solid ${color}`;
  return (
    <li className="opening-box" style={{ border: borderStyle }}>
      <figure
        className="opening-box-arrow"
        style={{ borderLeft: borderStyle, borderBottom: borderStyle }}
      />

      <div className="opening-box-title">{title}</div>
      <div className="opening-box-text">{_body}</div>
    </li>
  );
};

export default OpeningBox;
