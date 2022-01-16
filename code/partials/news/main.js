import React from 'react'
import { images } from '../../../assets/js/images';
import { handleUrl } from '../../util/link'

const Main = ({ mainPost, postsBottom, postsTop, videoSection, loadMoreButton, subscribe, _relativeURL, _ID, trendingPosts }) => {
    const generateUrl = (url) => {
        return handleUrl(url, _relativeURL, _ID);
    };

    return (
        <main className='news'>
            <img className='news-figure news-figure-top' src={generateUrl(images.news.figure)} />
            <img className='news-figure news-figure-bottom' src={generateUrl(images.news.figure)} />


            <div className='news-grid'>
                {mainPost}
                {trendingPosts}
                {subscribe}
                {postsTop}
                {videoSection}
                {postsBottom}
            </div>
            {loadMoreButton}

        </main>
    )
}

export default Main
