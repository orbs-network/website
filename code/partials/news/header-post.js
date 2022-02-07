import React from 'react'

const  HeaderPost = ({ _body, image }) =>  {
    return (
        <div className='news-main-post'>
            <div className='news-main-post-content'>
            {_body}
            </div>
            <img src={image} className='news-main-post-image' />
        </div>
    )
}

export default HeaderPost
