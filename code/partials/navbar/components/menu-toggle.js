import React from "react";
import Img from "../../shared/Img";

const MenuToggle = ({ url, toggleImg, customClassName, image }) => {
  const className = `menu-burger-toggle ${customClassName}`;
  return (
    <div className="menu-burger flex-start">
      <button className={className} aria-label="menu-toggle">
        <Img src={toggleImg} className="menu-burger-img" alt="menu-toggle" />
      </button>
      <a href={url} className="logo" rel="noopener">
        <Img src={image} alt="orbs logo" />
        <p>ORBS</p>
      </a>
    </div>
  );
};

export default MenuToggle;
