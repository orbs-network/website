import React from "react";

const MenuToggle = ({ generateUrl, customClassName, link }) => {
  const className = `menu-burger ${customClassName}`;
  return (
    <div className="menu-burger-wrapper flex-start">
      <button className={className}>
        <img src={generateUrl("../assets/img/navbar/hamburger.png")} />
      </button>
      <a href={link}>
        <img
          className="logo"
          src={generateUrl("../assets/img/navbar/logo.svg")}
        />
      </a>
    </div>
  );
};
MenuToggle.getInitialProps = async function (props) {
  const { generateUrl, customClassName, link } = await FetchMyDataFromSomewhere(
    props._ID
  );
  return { generateUrl, customClassName, link };
};
export default MenuToggle;
