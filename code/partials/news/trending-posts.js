import React from 'react'

function TrendingPosts({ posts, title, rotatedTitle }) {
    return (
        <div className='news-trending'>
            <h2 className='news-trending-rotated'>{rotatedTitle}</h2>
            <div className='news-trending-flex'>
                <h4 className='news-trending-flex-title'>{title}</h4>
                <ul className='news-trending-flex-posts'>
                    {posts}
                </ul>
            </div>
        </div>
    )
}

export default TrendingPosts
