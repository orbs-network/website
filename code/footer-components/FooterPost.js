import React from "react";

export const FooterPost = ({ text, img, date, showHoursAgo, hoursAgo }) => {
  return (
    <div className="footer-post flex-start">
      <figure>{/* <img src={img} /> */}</figure>
      <section className="flex-column footer-post-content">
        <p className="footer-post-text">{text}</p>
        {showHoursAgo ? `${hoursAgo} hours ago` : `On: ${date}`}
      </section>
    </div>
  );
};
