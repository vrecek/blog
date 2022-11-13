import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { INavigateLinks } from '../../../interfaces/CommonInterfaces'
import CategoriesList from './CategoriesList/CategoriesList'

const LinksList = () => {
    const n: NavigateFunction = useNavigate()

    const links: INavigateLinks[] = [
        { text: 'Home', url: '/' },
        { text: 'Tutorials', url: '/search/category/tutorials' },
        { text: 'News', url: '/search/category/news' }    
    ]

    return (
        <ul>

            {
                links.map((x, i) => (
                    <li key={i} onClick={() => n(x.url)}>
                        <p className='list-p'>{x.text}</p>
                    </li>
                ))
            }

            <CategoriesList />

        </ul>
    )
}

export default LinksList