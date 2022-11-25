import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { INavigateLinks } from '../../../../interfaces/CommonInterfaces'

const CategoriesMenu = () => {
    const n: NavigateFunction = useNavigate()

    const lists: INavigateLinks[][] = [
        [
            { text: 'Categories', url: '/', cname: 'active' },
            { text: 'Tutorials', url: '/search/category/Tutorial' },
            { text: 'News', url: '/search/category/News' }
        ],
        
        [
            { text: 'Tags', url: '/', cname: 'active' },
            { text: 'JavaScript', url: '/search/subcategory/JavaScript' },
            { text: 'TypeScript', url: '/search/subcategory/TypeScript' },
            { text: 'Programming', url: '/search/subcategory/Programming' },
            { text: 'Web application', url: '/search/subcategory/Web application' },
            { text: 'HTML', url: '/search/subcategory/HTML' },
            { text: 'Linux', url: '/search/subcategory/Linux' },
            { text: 'Terminal', url: '/search/subcategory/Terminal' },
            { text: 'Commands', url: '/search/subcategory/Commands' },
        ],

        [
            { text: 'Design', url: '/search/subcategory/Design' },
            { text: 'CSS', url: '/search/subcategory/CSS' },
            { text: 'SCSS', url: '/search/subcategory/SCSS' },
            { text: 'ReactJS', url: '/search/subcategory/ReactJS' },
            { text: 'NodeJS', url: '/search/subcategory/NodeJS' },
            { text: 'Fullstack', url: '/search/subcategory/Fullstack' },
            { text: 'Backend', url: '/search/subcategory/Backend' },
            { text: 'Frontend', url: '/search/subcategory/Frontend' },
            { text: 'Express', url: '/search/subcategory/Express' },
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