import React from "react";
import MainGrid from "../shared/MainGrid";

function WhoFor({ title, p1title1, p1title2, p1list, p2title1, p2title2, p2list }) {
  return (
    <section className="institutional-sec institutional-sec-dark institutional-whofor">
      <MainGrid>
        <h2 className="institutional-whofor-title">{title}</h2>
        <div className="institutional-whofor-grid">
          <div className="institutional-whofor-card">
            <div className="institutional-whofor-card-title">
              <span>{p1title1}</span><br />
              <span>{p1title2}</span>
            </div>
            <p className="institutional-whofor-card-list">{p1list}</p>
          </div>
          <div className="institutional-whofor-card">
            <div className="institutional-whofor-card-title">
              <span>{p2title1}</span><br />
              <span>{p2title2}</span>
            </div>
            <p className="institutional-whofor-card-list">{p2list}</p>
          </div>
        </div>
      </MainGrid>
    </section>
  );
}

export default WhoFor;
