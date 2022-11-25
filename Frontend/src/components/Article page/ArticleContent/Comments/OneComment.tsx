import React from 'react'
import { CommentType } from '../../../../interfaces/ArticleType'
import FigureImage from '../../../Common/FigureImage'
import blank from '../../../../images/blank.jpg'
import Client from '../../../../functions/Client'

const OneComment = ({authorAvatar, authorName, postedDate, text}: CommentType) => {
    return (
        <article className="one-comment">

            <section className="author-info">

                <FigureImage source={authorAvatar ?? blank} altTxt='Avatar' />

                <div className="text">

                    <p className="name">{authorName}</p>
                    <p className="date">{Client.numberToDateString(postedDate)}</p>

                </div>

            </section>            

            <p className='text'>{text}</p>

        </article>
    )
}

export default OneComment