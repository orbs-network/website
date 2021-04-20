import React from "react";
import Img from "../../common/Img";

const MenuToggle = ({ url, toggleImg, customClassName, image }) => {
  const className = `menu-burger ${customClassName}`;
  return (
    <div className="menu-burger-wrapper flex-start">
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
      <a href={url} className="flex-center">
        <Img src={image} className="logo" />
      </a>
    </div>
  );
};

export default MenuToggle;
