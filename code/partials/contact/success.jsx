import React from "react";
import { colors } from "../../../assets/js/consts/consts";

const ContactSuccess = ({ title, _body }) => {
  return (
    <div className="contact-success" style={{ background: colors.main }}>
      <h4>{title}</h4>
      {_body}
    </div>
  );
};

export default ContactSuccess;
