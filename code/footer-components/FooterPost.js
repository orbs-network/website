import React from "react";

export const FooterPost = ({ text, img, date, showHoursAgo }) => {
  return (
    <div className="footer-post">
      <figure>
        <img src={img} />
      </figure>
      <section className="flex-column">
        <p>{text}</p>
        {showHoursAgo ? `${date} ago` : `On: ${date}`}
      </section>
    </div>
  );
};
