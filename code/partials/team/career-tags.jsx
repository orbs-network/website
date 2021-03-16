import React from "react";

const CareerTags = ({ careers }) => {
  return (
    <ul className="team-careers-tags flex-center">
      {careers.map((career) => {
        return (
          <li className="flex-center">
            <a href={`#${career.title}`}>{career.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default CareerTags;
