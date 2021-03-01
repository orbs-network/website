import React from "react";
import MenuToggle from "./MenuToggle";
const Header = ({ generateUrl }) => {
  return (
    <div className="navbar-header">
      <MenuToggle
        generateUrl={generateUrl}
        customClassName="navbar-burger-open"
      />
    </div>
  );
};
Header.getInitialProps = async function (props) {
  const { generateUrl } = await FetchMyDataFromSomewhere(props._ID);
  return { generateUrl };
};
export default Header;
