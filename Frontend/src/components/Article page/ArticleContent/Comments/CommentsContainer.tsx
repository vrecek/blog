import React from 'react'
import { ICommentsContainer } from '../../../../interfaces/ArticlePageInterfaces'
import CommentForm from './CommentForm'
import CommentsInfo from './CommentsInfo'
import OneComment from './OneComment'

const CommentsContainer = ({comments, id}: ICommentsContainer) => {
    return (
        <section className="comments-container">

            <CommentForm id={id} />

            <CommentsInfo>Comments ({comments.length})</CommentsInfo>
            
            <div className="comm-sect">
                {
                    comments.map((x, i) => (
                        <OneComment
                            key={i}
                            authorName={x.authorName}
                            postedDate={x.postedDate}
                            authorAvatar={x.authorAvatar}
                            text={x.text}
                        />
                    ))
                }
            </div>
            
        </section>
    )
}

export default CommentsContainer