import React from "react";
import { images } from "../../../assets/js/images";
import { Border } from "./Border";
import CardLinks from "./CardLinks";

const DelegatorCard = ({ generateUrl }) => {
  return (
    <div className="globe-card d-card">
      <figure className="card-avatar">
        <img src="https://picsum.photos/200/300" />
      </figure>
      <div className="card-data">
        <span className="flex-center card-date">
          <p>Joined on:</p>
          <p>May 10, 2009</p>
        </span>
        <h3 className="card-name">JACKENN STURNES</h3>
        <h5 className="card-address">1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</h5>
        <span className="flex-center card-location">
          <img src="" />
          <p>New York, Usa</p>
        </span>
        <CardLinks generateUrl={generateUrl} />
        <Border />
        <section className="flex-center d-card-wallets">
          <p>Active Wallets</p>
          <img src={generateUrl(images.globe.metamask)} />
          <img src={generateUrl(images.globe.metamask)} />
        </section>
        <Border />
        <section className="d-card-tokens flex-center">
          <p>Delegated Tokens</p>
          <span className="flex-column">
            <h5>45,342,452</h5>
            <p>Delegated to @</p>
          </span>
          <span className="flex-column">
            <h5>105,707,879</h5>
            <p>Orbs Token</p>
          </span>
        </section>
      </div>
    </div>
  );
};

DelegatorCard.getInitialProps = async function (props) {
  const generateUrl = await FetchMyDataFromSomewhere(props._ID);
  return { generateUrl };
};
export default DelegatorCard;
