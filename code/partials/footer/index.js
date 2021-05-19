import React from "react";

const Footer = ({
  posts,
  tweets,
  navigation,
  logo_section,
  bottom_section,
}) => {
  return (
    <footer className="footer">
      <div className="main-grid">
        <div className="footer-flex">
          {logo_section}
          {posts}
          {tweets}
        </div>
      </div>
      {navigation}
      {bottom_section}
    </footer>
  );
};

export default Footer;
