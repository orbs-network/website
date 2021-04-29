import React from "react";

const Footer = ({ tweetsAndPosts, navigation, logoSection, bottomSection }) => {
  return (
    <footer className="footer">
      <div className="main-grid">
        <div className="footer-flex">
          {logoSection}
          {tweetsAndPosts}
        </div>
      </div>
      {navigation}
      {bottomSection}
    </footer>
  );
};

export default Footer;
