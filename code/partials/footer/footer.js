import React from "react";

const Footer = ({ posts, tweets, navigation, logoSection, bottomSection }) => {
  return (
    <footer className="footer">
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
