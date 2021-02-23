import React, { Component } from "react";

const socials = [
  {
    img: "../assets/img/socials/twitter.png",
    url: "",
  },
  {
    img: "../assets/img/socials/linkedin.png",
    url: "",
  },

  {
    img: "../assets/img/socials/reddit.png",
    url: "",
  },
  {
    img: "../assets/img/socials/telegram.png",
    url: "",
  },
  {
    img: "../assets/img/socials/github.png",
    url: "",
  },
];

class Socials extends Component {
  render() {
    const { generteUrl } = this.props;
    return (
      <ul class="socials">
        {socials.map((social) => {
          return (
            <li className="socials-element">
              <a href={social.url}>
                <img src={generteUrl(social.img)} />
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}
Socials.getInitialProps = async function (props) {
  const generteUrl = await FetchMyDataFromSomewhere(props._ID);
  return { generteUrl };
};

export default Socials;
