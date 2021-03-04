import React from "react";

const MenuToggle = ({ generateUrl, customClassName }) => {
  const className = `menu-burger ${customClassName}`;
  return (
    <div className="menu-burger-wrapper flex-start">
      <button className={className}>
        <img src={generateUrl("../assets/img/navbar/hamburger.png")} />
      </button>
      <img
        className="logo"
        src={generateUrl("../assets/img/navbar/logo.svg")}
      />
    </div>
  );
};
MenuToggle.getInitialProps = async function (props) {
  const { generateUrl, customClassName } = await FetchMyDataFromSomewhere(
    props._ID
  );
  return { generateUrl, customClassName };
};
export default MenuToggle;
