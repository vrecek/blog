import React from 'react'
import OneComment from './OneComment'

const CommentsContainer = () => {
    return (
        <section className="comments-container">

            <p className="entry-header">Comments (99)</p>
            
            <OneComment />
            <OneComment />
            <OneComment />
            <OneComment />

        </section>
    )
}

export default CommentsContainer