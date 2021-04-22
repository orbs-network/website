import React from "react";
import Img from "../../shared/Img";

const MenuToggle = ({ url, toggleImg, customClassName, image }) => {
  const className = `menu-burger-toggle ${customClassName}`;
  return (
    <div className="menu-burger flex-start">
      <button className={className}>
        {toggleImg ? (
          <Img src={toggleImg} />
        ) : (
          <React.Fragment>
            <aside></aside>
            <aside></aside>
            <aside></aside>
          </React.Fragment>
        )}
      </button>
      <a href={url} className="logo">
        <Img src={image} />
      </a>
    </div>
  );
};

export default MenuToggle;
