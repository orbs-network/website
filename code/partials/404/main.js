import React from "react";

const NotFound = ({ _body }) => {
  const redirectScript = `
    (function() {
      var path = window.location.pathname.replace(/^\\/+|\\/+$/g, '');
      if (path && path !== '404') {
        window.location.replace('https://blog.orbs.com/' + path);
      } else {
        window.location.replace('https://blog.orbs.com');
      }
    })();
  `;

  return (
    <div className="page" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <p>Redirecting to <a href="https://blog.orbs.com">blog.orbs.com</a>…</p>
      </div>
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
    </div>
  );
};

export default NotFound;
