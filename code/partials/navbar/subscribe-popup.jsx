import React from "react";

const SubscribePopup = () => {
  return (
    <div className="subscribe-popup">
      <section className="subscribe-popup-overlay"></section>
      <form className="subscribe-popup-content">
        <h3>subscribe</h3>
        <section className="subscribe-popup-content-inputs">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
        </section>
        <input
          type="submit"
          value="Submit"
          className="subscribe-popup-submit"
        />
      </form>
    </div>
  );
};

export default SubscribePopup;
