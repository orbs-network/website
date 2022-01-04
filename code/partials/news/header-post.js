import React from 'react'

const  HeaderPost = ({ _body, image, title }) =>  {
    return (
        <div className='news-main-post'>
            <div className='news-main-post-content'>
                <h1>{title}</h1>
               <section className='news-main-post-content-body'>
               {_body}
               </section>
            </div>
            <img src={image} className='news-main-post-image' />
        </div>
    )
}

export default HeaderPost
