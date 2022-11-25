import React from 'react'
import { AiFillRead } from 'react-icons/ai'
import { IReadTime } from '../../../../interfaces/ArticlePageInterfaces'
import Icon from '../../../Common/Icon'

const ReadTime = ({textLen}: IReadTime) => {
    const readTime: number = Math.ceil(textLen / 1100)

    return (
        <div className="read-time">

            <Icon><AiFillRead /></Icon>
            Read in: {readTime} minutes
            
        </div>
    )
}

export default ReadTime