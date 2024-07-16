import React from 'react'
import { handleUrl } from '../../util/link';

const  Author = ({ image,_body, _relativeURL, _ID }) =>  {
    const generateUrl = (url) => {
        return handleUrl(url, _relativeURL, _ID);
      };
    return (
        <div className='news-author'>
            <img src={generateUrl(image)} className='news-author-avatar' />
            {_body}
        </div>
    )
}

export default Author
