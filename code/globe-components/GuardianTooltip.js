import React, { useRef } from "react";

const GuardianLinks = () => {
  return (
    <ul className="guardian-contact">
      <li>
        <a href="">
          <img src="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src="" />
        </a>
      </li>
    </ul>
  );
};

export const GuardianTooltip = () => {
  return (
    <div class="guardian-container">
      <figure className="guardian-avatar">
        <img />
      </figure>
      <div className="guardian-details">
        <section className="guardian-details-top">
          <p className="guardian-join-date">
            Joined on: {new Date().getDate()}
          </p>
          <h4 className="guardian-name"></h4>
          <h5 className="guardian-username"></h5>
          <p className="guardian-country"></p>
          <GuardianLinks />
        </section>
        <section className="guardian-details-bottom">
          <span>
            <img src="" />
            <p>Recent repositories</p>
          </span>
          <div className="guardian-repositories-left"></div>
          <div className="guardian-repositories-right"></div>
          <div>
            <p>Interests: </p>
            <ul className="guardian-interests"></ul>
          </div>
        </section>
      </div>
    </div>
  );
};
