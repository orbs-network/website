import React from "react";
import { handleUrl } from "../../../util/link";
import CodeContainer from "../../shared/CodeContainer";


function Example({ _body, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="contribute-example">
      <CodeContainer
        generateUrl={generateUrl}
        code=""
        left={<Left _body={_body} />}
      />
    </div>
  );
}

export default Example;

const Left = ({ _body }) => {
  return <div className="contribute-example-body">{_body}</div>;
};


