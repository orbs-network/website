import React from 'react'
import { handleUrl } from '../../util/link'

const Main = ({ mainPost, postsBottom, postsTop, videoSection, loadMoreButton, subscribe, _relativeURL, _ID, trendingPosts }) => {
    const generateUrl = (url) => {
        return handleUrl(url, _relativeURL, _ID);
    };

    return (
        <main className='news'>
            <img className='news-figure news-figure-top' src={generateUrl('../../../assets/img/news/figure.svg')} />
            <img className='news-figure news-figure-bottom' src={generateUrl('../../../assets/img/news/figure.svg')} />
            {mainPost}
            {trendingPosts}
            <div className='news-grid'>
                {subscribe}
                {postsTop}
                {videoSection}
                {postsBottom}
            </div>
            {loadMoreButton}
            <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

        </main>
    )
}

export default Main
