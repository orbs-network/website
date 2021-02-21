import React from "react";
import { Flags } from "./navbar-components/flags";

export const Navbar = () => {
  return (
    <div class="navbar">
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <section className="navbar-menu">
        <button className="navbar-menu-close">close</button>
        <div className="navbar-menu-section">
          <h4>Overview</h4>
          <a href="">THE ORBS NETWORK</a>
          <a href="">
            <a href="">Orbs Smart Contracts</a>
          </a>
          <a href="">Proof of stake Universe</a>
        </div>
        <div className="navbar-menu-section">
          <h4>Resources</h4>
          <ul>
            <li>Tetra</li>
            <li>Analytics</li>
            <li>Status</li>
            <li>V1 Reward</li>
            <li>BlocK</li>
            <li>VC Portal</li>
          </ul>
        </div>
      </section>
      <Flags />
    </div>
  );
};
