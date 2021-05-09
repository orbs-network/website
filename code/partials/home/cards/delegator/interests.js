import React from "react";

const Interests = ({ interestsTitle, interestsList }) => {
  return (
    <section className="d-card-interests flex-start">
      <h5>{interestsTitle}</h5>
      <ul className="flex-start">
        {interestsList.map((interest, index) => {
          const prefix = index === interestsList.length - 1 ? "" : ",";
          return (
            <li key={`${interest}-${index}`}>
              {interest}
              {prefix}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Interests;
