import React from "react";

function Telegram({ title, links, id }) {
  return (
    <div className="contact-socials-section" id={id}>
      <h4>{title}</h4>
      {links}
    </div>
  );
}

export default Telegram;
