import React from 'react'
import { images } from '../../../assets/js/images'
import { handleUrl } from '../../util/link';

function TrendingPosts({ posts, _relativeURL, _ID }) {
    const generateUrl = (url) => {
        return handleUrl(url, _relativeURL, _ID);
    };


    return (
        <div className='news-trending'>
            <img className='news-trending-img' src={generateUrl(images.news.trending)} />
            <div className='news-trending-flex'>
                <ul className='news-trending-flex-posts'>
                    {posts}
                </ul>
            </div>
        </div>
    )
}

export default TrendingPosts
