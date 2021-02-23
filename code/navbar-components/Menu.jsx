import React, { Component } from "react";
import { navbarAbout, navbarOverview, navbarResources } from "./data/data";
import en from "../text/en.json";
import Hamburger from "./Hamburger";
import Socials from "../common-components/socials";

class Menu extends Component {
  static async getInitialProps(props) {
    const generteUrl = await FetchMyDataFromSomewhere(props._ID);
    return { generteUrl };
  }

  render() {
    const { generteUrl } = this.props;

    return (
      <div className="nav-menu">
        <Hamburger isActive={true} customClassName="nav-menu-close" />
        <section className="nav-menu-section">
          <h4>{en.navbar.overview}</h4>
          <ul>
            {navbarOverview.map((overview) => {
              return (
                <li className="nav-menu-link">
                  <a href={overview.url}>{overview.name}</a>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="nav-menu-section nav-menu-resources">
          <h4>{en.navbar.resources}</h4>
          <ul className="flex-start">
            {navbarResources.map((resource) => {
              return (
                <li>
                  <a href={resource.url}>{resource.name}</a>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="nav-menu-section">
          <h4>{en.navbar.about}</h4>
          <ul>
            {navbarAbout.map((about) => {
              return (
                <li className="nav-menu-link">
                  <a href={generteUrl(about.url)}>{about.name}</a>
                </li>
              );
            })}
          </ul>
        </section>
        <Socials generteUrl={generteUrl} />
      </div>
    );
  }
}

export default Menu;
