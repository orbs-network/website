import React from "react";
import SubscribePopup from "./subscribe-popup";

const Navbar = ({ navbarTop, menu }) => {
  return (
    <div class="main-header">
      <SubscribePopup />
      <div className="main-grid">
        {navbarTop}
        {menu}
      </div>
    </div>
  );
};

export default Navbar;
