import React, { Component } from "react";
import Teammate from "./teammate";

const Management = ({ _relativeURL, _ID, management, figure }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="team-list-section team-list-section-managers">
      <ul className="team-list managers-list">
        {management.map((manager) => {
          return <Teammate data={manager} generateUrl={generateUrl} />;
        })}
      </ul>
      <figure className="team-list-img">
        <img src={generateUrl(figure)} />
      </figure>
    </section>
  );
};

export default Management;
