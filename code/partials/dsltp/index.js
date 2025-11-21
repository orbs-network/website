import React from 'react'
import { handleUrl } from '../../util/link';


function main({
  header,
  _relativeURL,
  _ID,
  section1,
  section2,
  section3,
  section4,
}) {


  return (
    <div className="dsltp page">
      {header}
      {section1}
      {section2}
      {section3}
      {section4}
    </div>
  );
}

export default main