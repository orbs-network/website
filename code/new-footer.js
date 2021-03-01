import React from "react";
import { FooterPost } from "./footer-components/FooterPost";

const NewFooter = ({ posts, tweets, text, navigation, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <footer className="footer-wrapper">
      <div className="footer-flex">
        <section className="footer-section">
          <h1>{text.orbs}</h1>
          <p>{text.orbs_text}</p>
          <h5>{text.orbs_email}</h5>
        </section>
        <section className="footer-section">
          <h5>{text.posts}</h5>
          {posts.map((post) => {
            return (
              <FooterPost
                text={post.content}
                date={post.date}
                showHoursAgo={false}
                img={post.image}
              />
            );
          })}
        </section>
        <section className="footer-section">
          <h5>{text.tweets}</h5>
          {tweets.map((tweet) => {
            return (
              <FooterPost
                text={tweet.content}
                hoursAgo={tweet.hours_ago}
                showHoursAgo={true}
                img={tweet.image}
              />
            );
          })}
        </section>
        <section className="footer-section">
          <h5>{text.navigation}</h5>
          <ul className="footer-navigation">
            {navigation.map((link) => {
              return (
                <li>
                  <a href={generateUrl(link.url)}>{link.name}</a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default NewFooter;
