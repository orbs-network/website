import React from "react";

const ResearchPaper = ({
  category,
  title,
  date,
  link,
  countryCode,
  lat,
  lng,
}) => {
  return (
    <div
      className="card research-paper-card"
      data-countryCode={countryCode}
      data-lng={lng}
      data-lat={lat}
    >
      <h3>{category}</h3>
      <h3>{title}</h3>
      <h3>{date}</h3>
      <a href={link}>Link</a>
    </div>
  );
};

export default ResearchPaper;
