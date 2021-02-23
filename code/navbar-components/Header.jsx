import React from "react";
import Hamburger from "./Hamburger";
const Header = () => {
  return (
    <div className="navbar-header">
      <Hamburger isActive={false} customClassName="hamburger" />
    </div>
  );
};

export default Header;
