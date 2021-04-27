import React from "react";

const Navbar = ({ navbarTop, menu }) => {
  return (
    <div class="main-header">
      <div className="main-grid">
        {navbarTop}
        {menu}
      </div>
    </div>
  );
};

export default Navbar;
