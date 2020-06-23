import React from 'react'

const Posts = (props) => {
    const { posts } = props
    const postElements = posts.map(post => (
        <div>
            <h1>{ post.isBoast ? "Boast":"Roast"}</h1>
        </div>
    ))
    console.log(postElements)
    return (
        <h1>Thing</h1>
    )
}

export default Posts