import React from "react";
import { images } from "../../../assets/js/images";
import { Border } from "./Border";
import CardLinks from "./CardLinks";

const ContributorCard = ({ generateUrl }) => {
  return (
    <div className="globe-card c-card">
      <figure className="card-avatar">
        <img src="https://picsum.photos/200/300" />
      </figure>
      <div className="card-data">
        <span className="flex-center card-date">
          <p>Joined on:</p>
          <p>May 10, 2009</p>
        </span>
        <h3 className="card-name">JACKENN STURNES</h3>
        <p className="card-nickname">@nicknamehere</p>
        <span className="flex-center card-location">
          <img src="" />
          <p>New York, Usa</p>
        </span>
        <CardLinks generateUrl={generateUrl} />

        <Border />
        <section className="flex-between c-card-repos">
          <div className="c-card-repos-top flex-center">
            <img src={generateUrl(images.globe.repository)} />
            <p>Recent Repositories</p>
          </div>
          <span>
            <h5>Test</h5>
            <p>
              We have elected to put our money and faith in a mathematical
              framework that is free of politics and human error
            </p>
            <button>TypeScript</button>
          </span>
          <span>
            <h5>Test</h5>
            <p>
              We have elected to put our money and faith in a mathematical
              framework that is free of politics and human error
            </p>
            <button>JavaScript</button>
          </span>
        </section>
        <Border />
        <section className="c-card-interests flex-start">
          <p>Interests: </p>
          <ul className="flex-start">
            <li>DeFi</li>
            <li>Open source</li>
            <li>Orbs</li>
            <li>Json</li>
            <li>+4</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
ContributorCard.getInitialProps = async function (props) {
  const generateUrl = await FetchMyDataFromSomewhere(props._ID);
  return { generateUrl };
};
export default ContributorCard;
