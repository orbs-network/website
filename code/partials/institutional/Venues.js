import React from "react";
import MainGrid from "../shared/MainGrid";

function Venues({ title, v1, v2, v3, v4, v5, v6 }) {
  const venues = [v1, v2, v3, v4, v5, v6].filter(Boolean);
  return (
    <section className="institutional-sec institutional-venues">
      <MainGrid>
        <h3 className="institutional-venues-title">{title}</h3>
        <div className="institutional-venues-row">
          {venues.map((v, i) => (
            <div key={i} className="institutional-venues-logo">
              {v}
            </div>
          ))}
        </div>
      </MainGrid>
    </section>
  );
}

export default Venues;
