import React from "react";
import { handleUrl } from "../../../../util/link";

function Item({
  value,
  _body,
  selected,
  supportedLibraries,
  _relativeURL,
  _ID,
}) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <li
      data-link-img={generateUrl("/assets/img/link.svg")}
      data-selected={selected}
      data-value={value}
      className="selectbox-list-item"
      data-supported={supportedLibraries}
    >
      {_body}
    </li>
  );
}

export default Item;
