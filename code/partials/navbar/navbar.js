import React from "react";

const Navbar = ({ navbarTop, menu }) => {
  return (
    <div class="main-navbar">
      {navbarTop}
      {menu}
    </div>
  );
};

export default Navbar;
