import React from "react";

const Gdpr = ({ _body, accept_text, reject_text }) => {
  return (
    <div className="gdpr">
      {_body}
      <div className="gdpr-btns">
        <button className="gdpr-accept" aria-label="accept">
          {accept_text}
        </button>
        <button className="gdpr-reject" aria-label="reject">
          {reject_text}
        </button>
      </div>
    </div>
  );
};

export default Gdpr;
