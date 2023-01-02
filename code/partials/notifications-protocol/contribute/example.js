import React from "react";
import CodeContainer from "../../shared/CodeContainer";


function Example({ _body, copy}) {
  return (
    <div className="contribute-example">
      <CodeContainer copy={copy} code='' left={<Left _body={_body} />} />
    </div>
  );
}

export default Example;

const Left = ({ _body }) => {
  return <div className="contribute-example-body">{_body}</div>;
};


