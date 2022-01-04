import React from 'react'

const  Post = ({ _body, image, url, author, date }) => {
    return (
        <li className='new-post'>
            <a href={url} target='_blank'>
                <img src={image} />
                <div className='new-post-body'>{_body}</div>
                <div className='new-post-bottom'>{author}<p>{date}</p></div>
            </a>

        </li>
    )
}

export default Post
