import React from "react";
import { Border } from "./Border";

const GuardianCard = () => {
  return (
    <div className="globe-card g-card">
      <figure className="card-avatar">
        <img src="https://picsum.photos/200/300" />
      </figure>
      <div className="card-data">
        <span className="flex-center card-date">
          <p>Joined on:</p>
          <p>May 10, 2009</p>
        </span>
        <h3 className="card-name">STAKE_HOLDER</h3>
        <h5 className="card-address">1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</h5>
        <span className="flex-center g-card-location">
          <img src="" />
          <p>New York, Usa</p>
        </span>
        <span className="flex-center g-card-location">
          <img src="" />
          <p>www.wings.com</p>
        </span>
        <Border />
        <section className="flex-between g-card-stake">
          <span className="column-center">
            <h4>20%</h4>
            <p>Effective Stake</p>
          </span>
          <span className="column-center">
            <h4>105,707,879</h4>
            <p>Total Stake</p>
          </span>
        </section>
        <Border />
        <section className="g-card-bottom">
          <figure className="g-card-bottom-quotes-left">"</figure>
          <p>
            We have elected to put our money and faith in a mathematical
            framework that is free of politics and human error
          </p>
          <figure className="g-card-bottom-quotes-right">"</figure>
        </section>
      </div>
    </div>
  );
};

export default GuardianCard;
