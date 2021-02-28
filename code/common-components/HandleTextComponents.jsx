import React from "react";
import TextBox from "./TextBox";
import TextBoxWithDots from "./TextBoxWithDots";
import TextBoxWithImages from "./TextBoxWithImages";
import TextCards from "./TextCards";

const HandleTextComponent = ({ section, customClassName }) => {
  switch (section.type) {
    case "text":
      return <p className="regular-text">{section.text}</p>;
    case "textBox":
      return <TextBox section={section} />;
    case "textBoxWithImages":
      return (
        <TextBoxWithImages
          section={section}
          customClassName={customClassName}
        />
      );
    case "textBoxWithDots":
      return <TextBoxWithDots section={section} />;
    case "textCards":
      return <TextCards section={section} />;
    default:
      return null;
  }
};
HandleTextComponent.getInitialProps = async function (props) {
  const { section, customClassName } = await FetchMyDataFromSomewhere(
    props._ID
  );
  return { section, customClassName };
};
export default HandleTextComponent;
