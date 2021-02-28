import React from "react";
import TextBoxBase from "./TextBoxBase";

const TextBox = ({ customClassName, section }) => {
  return (
    <div className="text-box">
      <TextBoxBase section={section} />
    </div>
  );
};
TextBox.getInitialProps = async function (props) {
  const { customClassName, section } = await FetchMyDataFromSomewhere(
    props._ID
  );
  return { customClassName, section };
};
export default TextBox;
