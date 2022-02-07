import React from 'react'
import { images } from '../../../assets/js/images';
import { handleUrl } from '../../util/link'
import Posts from './posts';

const Main = ({ mainPost, postsTop, videoSection, loadMoreButton, subscribe, _relativeURL, _ID, trendingPosts }) => {
    const generateUrl = (url) => {
        return handleUrl(url, _relativeURL, _ID);
    };

    return (
        <main className='news'>
            <img className='news-figure news-figure-top' src={generateUrl(images.news.figure)} />
            <img className='news-figure news-figure-bottom' src={generateUrl(images.news.figure)} />
            <img className='news-bg' src={generateUrl(images.news.dots)} />
            <div className='news-grid'>
                {mainPost}
                {trendingPosts}
                {subscribe}
                {postsTop}
                {videoSection}
                <Posts id='news-posts-bottom' />
            </div>
            {loadMoreButton}
            <script type='module' src={generateUrl(`/assets/js/news/index.js`)} />
        </main>
    )
}

export default Main
