import React from "react";
import { FooterPost } from "./footer-components/FooterPost";

const NewFooter = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-flex">
        <section className="footer-section">
          <h1>ORBS</h1>
          <p>
            Combining Orbs scalability, low fees and isolation between virtual
            chains with a first-grade developer experience, online IDE and smart
            contracts in familiar languages. Developers get the perfect mix of
            performance, cost, security and ease of use.
          </p>
          <h5>Hello@orbs.com</h5>
        </section>
        <section className="footer-section">
          <h5>Latest Blog Posts</h5>
          <FooterPost
            text="Combining Orbs scalability, low fees and isolation between virtual chains with a first-grade developer experience, online IDE and smart contracts in familiar languages. Developers get the perfect mix of performance, cost, security and ease of use."
            date="Feb 12, 2015"
            showHoursAgo={false}
            img=""
          />
          <FooterPost
            text="Combining Orbs scalability, low fees and isolation between virtual chains with a first-grade developer experience, online IDE and smart contracts in familiar languages. Developers get the perfect mix of performance, cost, security and ease of use."
            date="Feb 12, 2015"
            showHoursAgo={false}
            img=""
          />
        </section>
        <section className="footer-section">
          <h5>Latest Tweets</h5>
          <FooterPost
            text="Combining Orbs scalability, low fees and isolation between virtual chains with a first-grade developer experience, online IDE and smart contracts in familiar languages. Developers get the perfect mix of performance, cost, security and ease of use."
            date="Feb 12, 2015"
            showHoursAgo={true}
            img=""
          />
          <FooterPost
            text="Combining Orbs scalability, low fees and isolation between virtual chains with a first-grade developer experience, online IDE and smart contracts in familiar languages. Developers get the perfect mix of performance, cost, security and ease of use."
            date="Feb 12, 2015"
            showHoursAgo={true}
            img=""
          />
          <FooterPost
            text="Combining Orbs scalability, low fees and isolation between virtual chains with a first-grade developer experience, online IDE and smart contracts in familiar languages. Developers get the perfect mix of performance, cost, security and ease of use."
            date="Feb 12, 2015"
            showHoursAgo={true}
            img=""
          />
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
