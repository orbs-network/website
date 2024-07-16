import React from "react";

const Footer = ({
  blogs,
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
          {blogs}
          {tweets}
        </div>
      </div>
      {navigation}
      {bottom_section}
    </footer>
  );
};

export default Footer;
