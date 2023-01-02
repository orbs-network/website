import React from "react";

function SmallGrid({ children, className = "" }) {
  return <div className={`small-grid ${className}`}>{children}</div>;
}

export default SmallGrid;
