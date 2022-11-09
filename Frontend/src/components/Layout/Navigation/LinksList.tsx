import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { INavigateLinks } from '../../../interfaces/CommonInterfaces'

const LinksList = () => {
    const n: NavigateFunction = useNavigate()

    const links: INavigateLinks[] = [
        { text: 'Home', url: '/' },
        { text: 'Latest', url: '/' },
        { text: 'Popular', url: '/' },
        { text: 'Contact', url: '/contact' }
    ]

    return (
        <ul>

            {
                links.map((x, i) => (
                    <li key={i} onClick={() => n(x.url)}>
                        {x.text}
                    </li>
                ))
            }

        </ul>
    )
}

export default LinksList