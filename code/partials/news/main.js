import React from 'react'

const  Main = ({ mainPost, posts }) => {
    return (
        <main className='news'>
            {mainPost}
            {posts}
        </main>
    )
}

export default Main
