import React from 'react'

const Posts = (props) => {
    const { posts, id = '', title } = props
    return (
        <div className='news-posts'>
           {title &&  <h4 className='news-posts-title'>{title}</h4>}
            <ul id={id}>
                {posts}
            </ul>
        </div>
    )
}

export default Posts
