import React from 'react'
import FigureImage from '../../../Common/FigureImage'
import ArticleTags from './ArticleTags'

const ArticleImageSection = () => {
    return (
        <section className="article-image-section">

            <FigureImage cname='main-img' source='http://localhost:3000/static/media/n1.8bae44817dc9c07dc1b5.jpg' altTxt='Image' />
            <ArticleTags />

        </section>
    )
}

export default ArticleImageSection