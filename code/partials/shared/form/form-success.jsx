import React from "react";
import { colors } from "../../../../assets/js/consts/consts";

const FormSuccess = ({ title, _body }) => {
  return (
    <div className="form-success" style={{ background: colors.main }}>
      <h4>{title}</h4>
      {_body}
    </div>
  );
};

export default FormSuccess;
