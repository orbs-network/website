import React from 'react'

const Post = (props) => {
    const { date, image, url, _body, logo } = props
    
    const body = _body ? _body.props.dangerouslySetInnerHTML.__html : ''
    const data = {
        date, image, url, body, logo
    }
    return <div className='news-post-hidden' data-component={JSON.stringify(data)}>
    </div>
}

export default Post
