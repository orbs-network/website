import React from 'react'

function Author({ image, name, text }) {
    return (
        <div className='news-author'>
            <img src={image} />
            <p>{text} {name}</p>
        </div>
    )
}

export default Author
