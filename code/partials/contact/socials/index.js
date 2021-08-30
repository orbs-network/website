import React from "react";

function ContactSocials({ title, sections }) {
  return (
    <div className="contact-socials">
      <h3>{title}</h3>
      <div className="contact-socials-flex">{sections}</div>
    </div>
  );
}

export default ContactSocials;
