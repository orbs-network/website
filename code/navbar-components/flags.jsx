import React, { Component } from "react";
import en from "../../assets/globe/language/en.json";

const flags = [
  {
    name: "KO",
    img: "../assets/globe/assets/korea.png",
  },
  {
    name: "CN",
    img: "../assets/globe/assets/china.png",
  },
];

class Flags extends Component {
  render() {
    const list = () => {
      flags.map((flag) => {
        return (
          <li>
            <img src={flag.img} />
          </li>
        );
      });
    };

    return (
      <section class="navbar-flags">
        <span class="flex-start">
          <p>+</p>
          <p>{en.subscribe_to_updates}</p>
        </span>
        <ul class="navbar-flags-list">{list()}</ul>
      </section>
    );
  }
}

export default Flags;
