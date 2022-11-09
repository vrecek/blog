import React from 'react'
import { IArticleContainer } from '../../../../interfaces/HomepageInterfaces'
import DisplayArticle from '../DisplayArticle'
import '../../../../css/BorderArticles.css'
import '../../../../css/RegularArticles.css'
import CategoryInfo from './CategoryInfo'

const ArticleContainer = ({articles, cname, category}: IArticleContainer) => {
    return (
        <section className={cname}>

            {
                category 
                   ? <CategoryInfo category={category} />
                   : <></>
            }

            {   
                articles
                    .map(x => DisplayArticle(x))
            }

        </section>
    )
}

export default ArticleContainer