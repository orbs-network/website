import { htmlToText } from "html-to-text";

export const testString = (data) => {
  const str = data.props.dangerouslySetInnerHTML.__html;
  console.log(htmlToText(str));
  //   const test = str.substring(0, 700);
  //   const regex = /(<([^>]+)>)/gi;
  //   const result = test.replace(regex, "");

  //   console.log(result);
  return "";
};
