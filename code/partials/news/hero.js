import React from 'react'

const Hero = ({ _body }) => {
    return (
        <div className='news-hero'>
            <div className='news-hero-body'>
                {_body}
            </div>
            <figure className='news-hero-figure news-hero-figure-left'><aside></aside></figure>
            <figure className='news-hero-figure news-hero-figure-right'></figure>
        </div>
    )
}

export default Hero
