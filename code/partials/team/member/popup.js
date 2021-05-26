import React from "react";
import { images } from "../../../../assets/js/images";
import Img from "../../shared/Img";

const Popup = ({ avatar, name, role, generateUrl, _body }) => {
  return (
    <div
      className="member-popup"
      data-name={name}
      data-image={generateUrl(avatar)}
    >
      <section className="member-popup-overlay" />

      <div className="member-popup-content">
        <button className="member-popup-close">
          <Img src={generateUrl(images.common.close)} />
        </button>
        <Img src="/" className="member-popup-content-image" />
        <div className="member-popup-content-right">
          <h3 className="member-popup-name">{name}</h3>
          <h4 className="member-popup-role">{role}</h4>
          <Img src="/" className="member-popup-content-mobile" />
          {_body}
        </div>
      </div>
    </div>
  );
};

export default Popup;
