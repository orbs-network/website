import React, { Component } from "react";
import { flags } from "./navbar-components/data/data";
import Header from "./navbar-components/Header";
import Menu from "./navbar-components/Menu";
import en from "./text/en.json";

class Navbar extends Component {
  static async getInitialProps(props) {
    const generteUrl = await FetchMyDataFromSomewhere(props._ID);
    return { generteUrl };
  }

  render() {
    const { generteUrl } = this.props;
    return (
      <div class="navbar">
        <Header />
        <Menu generteUrl={generteUrl} />
        <section class="navbar-flags">
          <span class="flex-start">
            <p>+</p>
            <p>{en.navbar.subscribe_to_updates}</p>
          </span>
          <ul class="navbar-flags-list">
            {flags.map((flag) => {
              return (
                <li>
                  <img src={generteUrl(flag.img)} />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default Navbar;
