import React from "react";
import { images } from "../../assets/js/images";

const links = [
  {
    img: images.socials.twitter,
    url: "https://twitter.com/orbs_network",
  },
  {
    img: images.socials.linkedin,
    url: "https://www.linkedin.com/company/orbs/",
  },

  {
    img: images.socials.reddit,
    url: "https://www.reddit.com/r/ORBS_Network/",
  },
  {
    img: images.socials.telegram,
    url: "https://t.me/OrbsNetwork",
  },
  {
    img: images.socials.github,
    url: "https://github.com/orbs-network/",
  },
  {
    img: images.socials.quora,
    url: "https://github.com/orbs-network/",
  },
];

const Socials = ({ generateUrl }) => {
  return (
    <ul class="socials">
      {links.map((link) => {
        return (
          <li className="socials-element">
            <a href={link.url} target="_blank">
              <img src={generateUrl(link.img)} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
Socials.getInitialProps = async function (props) {
  const generateUrl = await FetchMyDataFromSomewhere(props._ID);
  return { generateUrl };
};

export default Socials;
