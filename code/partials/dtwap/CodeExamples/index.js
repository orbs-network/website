import React from 'react'
import { handleUrl } from '../../../util/link';
import CodeContainer from '../../shared/CodeContainer'
import MainGrid from '../../shared/MainGrid';

function CodeExamples(props) {
    const { _relativeURL, _ID, title } = props;
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="dtwap-code-examples">
      <MainGrid>
        <h3 className="dtwap-code-examples-title">{title}</h3>
        <CodeContainer
          generateUrl={generateUrl}
          code=""
          left={<Left {...props} />}
        />
      </MainGrid>
    </div>
  );
}

export default CodeExamples


const Left = ({reactBody, stylesBody, raectTitle, stylesTitle}) => {
    return (
      <>
        <div className="options">
          <button data-name="react" className="react option">
            {raectTitle}
          </button>
          <button data-name="styles" className="styles option">
            {stylesTitle}
          </button>
        </div>
        <div className="content">
          <div className="react-body content-body">{reactBody}</div>
          <div className="styles-body content-body">{stylesBody}</div>
        </div>
      </>
    );
}