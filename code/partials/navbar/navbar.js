import React from "react";
import SubscribePopup from "./subscribe-popup";

const Navbar = ({ navbarTop, menu }) => {
  return (
    <div class="main-header">
      <div className="page-grid">
        <SubscribePopup />
        {navbarTop}
        {menu}
      </div>
    </div>
  );
};

export default Navbar;
