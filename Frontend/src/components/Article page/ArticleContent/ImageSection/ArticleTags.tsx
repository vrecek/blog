import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { ITags } from '../../../../interfaces/ArticlePageInterfaces'

const ArticleTags = ({tags}: ITags) => {
    const n: NavigateFunction = useNavigate()
    
    return (
        <ul className='tags'>

            {
                tags.map((x, i) => (
                    <li key={i} onClick={() => n(`/search/subcategory/${x}`)}>
                        {x}
                    </li>
                ))
            }

        </ul>
    )
}

export default ArticleTags