import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IRelatedArticles } from '../../../interfaces/ArticlePageInterfaces'

const RelatedList = ({relatedArticles}: IRelatedArticles) => {
    const n: NavigateFunction = useNavigate()

    return (
        <ul>

            <li className='disabled'>Related topics</li>

            {
                relatedArticles.map((x, i) => (
                    <li key={i} onClick={() => n(`/article/${x.url}`)} className={x.cname ?? ''}>
                        {x.text}
                    </li>
                ))
            }

        </ul>
    )
}

export default RelatedList