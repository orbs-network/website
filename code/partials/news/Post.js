import React from 'react'
import { handleUrl } from '../../util/link';


const PostComponent = (props) => {
    const { _body, image, url, date, title, _relativeURL, _ID, logo } = props
    const generateUrl = (url) => {
        return handleUrl(url, _relativeURL, _ID);
    };
    return (
        <li className='news-post'>
            <a href={url} target='_blank' className='news-post-link'>
                {title && <h3 className='news-post-title'>{title}</h3>}
                <img src={generateUrl(image)} className='news-post-img' />
                <div className='news-post-content'>
                    <img src={generateUrl(logo)} alt='logo' className='news-post-logo' />
                    <div className='news-post-body'>{_body}</div>
                    <div className='news-post-date'>{date}</div>
                </div>
            </a>

        </li>
    )
}

const Post = (props) => {
    const { show } = props
    const component = <PostComponent {...props} />
    if (!show) {
        return <div className='news-post-hidden' data-component={JSON.stringify(component)}>
        </div>
    } else {
        return component
    }

}

export default Post
