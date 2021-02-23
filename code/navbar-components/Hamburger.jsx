import React from "react";

const Hamburger = ({ customClassName = "", isActive }) => {
  const className = isActive
    ? `navbar-burger ${customClassName} is-active`
    : `navbar-burger ${customClassName}`;
  return (
    <a
      role="button"
      className={className}
      aria-label="menu"
      aria-expanded="false"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  );
};

Hamburger.getInitialProps = async function (props) {
  const { isActive, customClassName } = await FetchMyDataFromSomewhere(
    props._ID
  );
  return { isActive, customClassName };
};
export default Hamburger;
