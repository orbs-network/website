import React from "react";
import TextBoxBase from "./TextBoxBase";

const TextBoxWithImages = ({ section, customClassName = "" }) => {
  const { images, imgagesInLine = 3 } = section;
  const style = {
    width: `calc(100% / ${imgagesInLine} - 20px)`,
  };
  return (
    <div
      className={
        customClassName
          ? `text-box text-box-with-images ${customClassName}`
          : "text-box text-box-with-images"
      }
    >
      <TextBoxBase section={section} />
      <ul className="text-box-images flex-start">
        {images.map((image) => {
          return (
            <li style={style}>
              <figure>
                <img src={image.src} />
              </figure>
              <p>{image.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
TextBoxWithImages.getInitialProps = async function (props) {
  const { customClassName, section } = await FetchMyDataFromSomewhere(
    props._ID
  );
  return { customClassName, section };
};

export default TextBoxWithImages;
