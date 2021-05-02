import React from "react";

const Navbar = ({ navbarTop, menu }) => {
  return (
    <div class="navbar">
      <div className="main-grid navbar-flex">
        {navbarTop}
        {menu}
      </div>
    </div>
  );
};

export default Navbar;
