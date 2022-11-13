import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { INavigateLinks } from '../../../../interfaces/CommonInterfaces'

const CategoriesMenu = () => {
    const n: NavigateFunction = useNavigate()

    const lists: INavigateLinks[][] = [
        [
            { text: 'Dolore1', url: '/', cname: 'active' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
        ],
        
        [
            { text: 'Dolore2', url: '/', cname: 'active' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
        ],

        [
            { text: 'Dolore3', url: '/', cname: 'active' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
            { text: 'Dolore', url: '/search/subcategory/dolore' },
        ]
    ]

    return (
        <section className="categories-menu">

            <section className="wrap">

                {
                    lists.map((x, i) => (
                        <ol key={i}>
                            {
                                x.map((y, j) => (
                                    <li key={j} onClick={() => n(y.url)} className={y.cname ?? ''}>
                                        {y.text}
                                    </li>
                                ))
                            }
                        </ol>
                    ))
                }

            </section>

        </section>
    )
}

export default CategoriesMenu