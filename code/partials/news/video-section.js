import React from 'react'

function VideoSection({ video, image, title, _body, button, subscribe_link }) {
    return (
        <div className='news-video'>
             <img src={image}  className='news-video-youtube'/>
           <div className='news-video-flex'>
       
           <iframe className='news-video-left'  src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
           <div className='news-video-right'>
               <h3 className='news-video-right-title'>{title}</h3>
               <div className='news-video-right-body'>{_body}</div>
               <a href = {subscribe_link} target = '_blank' className='news-video-right-button'>{button}</a>
           </div>
           </div>
        </div>
    )
}

export default VideoSection
