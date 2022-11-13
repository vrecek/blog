import React from 'react'
import '../../css/ArticlePage.css'
import LayoutWrap from '../Layout/LayoutWrap'
import ArticleAside from './ArticleAside/ArticleAside'
import ArticleContent from './ArticleContent/ArticleContent'

const ARTICLE_PAGE = () => {
    window.scrollTo(0, 0)
    
    return (
        <LayoutWrap>

            <main className="article-page">

                <ArticleContent />
                <ArticleAside />

            </main>

        </LayoutWrap>
    )
}

export default ARTICLE_PAGE