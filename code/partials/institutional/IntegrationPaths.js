import React from "react";
import MainGrid from "../shared/MainGrid";

function IntegrationPaths({ title, p1title1, p1title2, p1body, p2title1, p2title2, p2body }) {
  return (
    <section className="institutional-sec institutional-paths">
      <MainGrid>
        <h2 className="institutional-paths-title">{title}</h2>
        <div className="institutional-paths-grid">
          <div className="institutional-paths-card">
            <div className="institutional-paths-card-title">
              <span>{p1title1}</span><br />
              <span>{p1title2}</span>
            </div>
            <p className="institutional-paths-card-body">{p1body}</p>
          </div>
          <div className="institutional-paths-card">
            <div className="institutional-paths-card-title">
              <span>{p2title1}</span><br />
              <span>{p2title2}</span>
            </div>
            <p className="institutional-paths-card-body">{p2body}</p>
          </div>
        </div>
      </MainGrid>
    </section>
  );
}

export default IntegrationPaths;
