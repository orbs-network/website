import React from "react";

const OpeningBox = ({ _body, title, color = "#E61EA9" }) => {
  const borderStyle = `2px solid ${color}`;
  return (
    <li className="opening-box" style={{ border: borderStyle }}>
      <figure
        className="opening-box-arrow"
        style={{ borderLeft: borderStyle, borderBottom: borderStyle }}
      />
      <section className="opening-box-overlay"></section>
      <div className="opening-box-title">
        <p>{title}</p>
      </div>
      <div className="opening-box-text">
        <p>{_body}</p>
      </div>
    </li>
  );
};

export default OpeningBox;
