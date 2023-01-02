import React from "react";

function Button({ _body, id = "" }) {
  return (
    <button className="button" id={id}>
      {_body}
    </button>
  );
}

export default Button;
