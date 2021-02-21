import React from "react";

const socials = {
  twitter: {
    img: "../assets/img/socials/twitter.png",
    url: "",
  },
  linkedin: {
    img: "../assets/img/socials/linkedin.png",
    url: "",
  },

  reddit: {
    img: "../assets/img/socials/reddit.png",
    url: "",
  },

  telegram: {
    img: "../assets/img/socials/telegram.png",
    url: "",
  },

  github: {
    img: "../assets/img/socials/github.png",
    url: "",
  },
};

export const Socials = () => {
  return (
    <ul class="socials">
      <li className="socials-element">
        <a href={socials.twitter.url}>
          <img src={socials.twitter.img} />
        </a>
      </li>
      <li className="socials-element">
        <a href={socials.linkedin.url}>
          <img src={socials.linkedin.img} />
        </a>
      </li>
      <li className="socials-element">
        <a href={socials.reddit.url}>
          <img src={socials.reddit.img} />
        </a>
      </li>
      <li className="socials-element">
        <a href={socials.github.url}>
          <img src={socials.github.img} />
        </a>
      </li>
      <li className="socials-element">
        <a href={socials.telegram.url}>
          <img src={socials.telegram.img} />
        </a>
      </li>
    </ul>
  );
};
