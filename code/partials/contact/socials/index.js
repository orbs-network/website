import React from "react";

function ContactSocials({ title, sections }) {
  return (
    <div className="contact-socials">
      <header className="header">
        <h1>{title}</h1>
      </header>
      <div className="contact-socials-flex">{sections}</div>
    </div>
  );
}

export default ContactSocials;
