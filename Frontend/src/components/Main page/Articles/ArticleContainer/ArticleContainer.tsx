import React from 'react'
import { IArticleContainer } from '../../../../interfaces/HomepageInterfaces'
import DisplayArticle from '../DisplayArticle'
import '../../../../css/BorderArticles.css'
import '../../../../css/RegularArticles.css'

const ArticleContainer = ({articles, cname}: IArticleContainer) => {
    return (
        <section className={cname}>

            {   
                articles.map(x => DisplayArticle(x))
            }

        </section>
    )
}

export default ArticleContainer