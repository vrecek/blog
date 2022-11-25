import React from 'react'
import { IArticleContainer } from '../../../../interfaces/HomepageInterfaces'
import '../../../../css/OneTwoArticles.css'
import DisplayArticle from '../DisplayArticle'

const OneTwoArticles = ({articles, cname}: IArticleContainer) => {
    Object.assign(articles[0], { cname: 'big' })
    Object.assign(articles[1], { cname: 'small' })
    Object.assign(articles[2], { cname: 'small' })
    
    delete articles[1].text
    delete articles[2].text

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