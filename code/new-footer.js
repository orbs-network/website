import React from "react";
import { FooterPost } from "./footer-components/FooterPost";

const NewFooter = ({ posts, tweets, text }) => {
  return (
    <div className="footer-wrapper">
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
          <h5>Latest Tweets</h5>
          <ul className="footer-navigation">
            <li>
              <a href="">Network overview</a>
            </li>
            <li>
              <a href="">Orbs Smart Contracts Overview</a>
            </li>
            <li>
              <a href="">Proof of stake Universe</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
            <li>
              <a href="">White papers</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Faq</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default NewFooter;
