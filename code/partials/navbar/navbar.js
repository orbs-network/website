import React from "react";
import SubscribePopup from "./subscribe-popup";

const Navbar = ({ navbarTop, menu }) => {
  return (
    <div class="main-navbar">
      <SubscribePopup />
      {navbarTop}
      {menu}
    </div>
  );
};

export default Navbar;
