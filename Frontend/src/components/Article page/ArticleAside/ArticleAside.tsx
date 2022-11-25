import React from 'react'
import RelatedList from './RelatedList'
import '../../../css/ArticleAside.css'
import { IArticleAside } from '../../../interfaces/ArticlePageInterfaces'
import Likes from './Likes'
import DateStr from './DateStr'

const ArticleAside = ({likes, postedDate, relatedArticles, id}: IArticleAside) => {
    return (
        <aside className="article-aside">

            <RelatedList relatedArticles={relatedArticles} />

            <section className="misc-info">

                <Likes id={id} details={likes} />

                <DateStr>{postedDate}</DateStr>

            </section>

        </aside>
    )
}

export default ArticleAside