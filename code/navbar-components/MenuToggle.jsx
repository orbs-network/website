import React from "react";

const MenuToggle = ({ generateUrl, customClassName }) => {
  const className = `menu-burger ${customClassName}`;
  return (
    <button className={className}>
      <img src={generateUrl("../assets/img/navbar/hamburger.png")} />
    </button>
  );
};
MenuToggle.getInitialProps = async function (props) {
  const { generateUrl, customClassName } = await FetchMyDataFromSomewhere(
    props._ID
  );
  return { generateUrl, customClassName };
};
export default MenuToggle;
