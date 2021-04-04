import React from "react";

const Interests = ({ title, interests }) => {
  const limit = 3;
  return (
    <section className="c-card-interests flex-start">
      <p>{title}</p>
      <ul className="flex-start">
        {interests &&
          interests.map((interest, index) => {
            if (index <= limit) {
              return <li className="flex-center">{interest}</li>;
            }
          })}
        {interests.length > limit && (
          <li className="flex-center">{`+ ${interests.length - limit}`}</li>
        )}
      </ul>
    </section>
  );
};

export default Interests;
