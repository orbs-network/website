import React from "react";

const Footer = ({ posts, tweets, navigation, logoSection, bottomSection }) => {
  return (
    <footer className="footer main-grid">
      <div className="footer-flex">
        {logoSection}
        {posts}
        {tweets}
        {navigation}
      </div>
      {bottomSection}
    </footer>
  );
};

export default Footer;
