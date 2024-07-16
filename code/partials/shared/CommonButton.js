import React from "react";

function CommonButton({ _body, children, onClick, className, id }) {
  return (
    <button className={`button ${className}`} id={className} onClick={onClick}>
      {children || _body}
    </button>
  );
}

export default CommonButton;
