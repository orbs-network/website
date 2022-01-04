import React from 'react'

function TrendingPost({ title, image, _body, author, date }) {
    return (
        <div className='news-trending-post'>
            <h3 className='news-trending-post-title'>
                {title}
            </h3>
            <img src={image} />
            <div className='news-trending-post-body'>
                {_body}
            </div>
            <div className='news-trending-post-bottom'>
                {author}
                <p>{date}</p>
            </div>
        </div>
    )
}

export default TrendingPost
