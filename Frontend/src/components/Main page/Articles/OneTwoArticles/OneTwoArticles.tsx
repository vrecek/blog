import React from 'react'
import { IArticleContainer } from '../../../../interfaces/HomepageInterfaces'
import '../../../../css/OneTwoArticles.css'
import DisplayArticle from '../DisplayArticle'

const OneTwoArticles = ({articles, cname}: IArticleContainer) => {
    return (
        <section className={`one-two ${cname}`}>

            { DisplayArticle(articles[0]) }

            <div className="wrap">

                {
                    articles.slice(1, 3).map(x => DisplayArticle(x!))
                }

            </div>

        </section>
    )  
}

export default OneTwoArticles