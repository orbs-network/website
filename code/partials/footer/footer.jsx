import React from "react";

const Footer = ({ posts, tweets, navigation, logoSection, bottomSection }) => {
  return (
    <footer className="footer">
      <div className="main-grid">
        <div className="footer-flex">
          {logoSection}
          {posts}
          {tweets}
        </div>

        {bottomSection}
      </div>
    </footer>
  );
};

export default Footer;
