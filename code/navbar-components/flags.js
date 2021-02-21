import React from "react";
import en from "../../assets/globe/language/en.json";

const flags = {
  korea: {
    name: "KO",
    img: "../assets/globe/assets/korea.png",
  },
  china: {
    name: "CN",
    img: "../assets/globe/assets/china.png",
  },
  usa: {
    name: "USA",
    img: "../assets/globe/assets/usa.png",
  },
};

export const Flags = () => {
  return (
    <section class="navbar-flags">
      <span class="flex-start">
        <p>+</p>
        <p>{en.subscribe_to_updates}</p>
      </span>
      <ul class="navbar-flags-list">
        <li>
          <img src={flags.china.img} />
        </li>
        <li>
          <img src={flags.usa.img} />
        </li>
        <li>
          <img src={flags.korea.img} />
        </li>
      </ul>
    </section>
  );
};
