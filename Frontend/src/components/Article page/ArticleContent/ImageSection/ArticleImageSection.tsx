import React from 'react'
import { AISection } from '../../../../interfaces/ArticlePageInterfaces'
import FigureImage from '../../../Common/FigureImage'
import ArticleTags from './ArticleTags'

const ArticleImageSection = ({image, tags}: AISection) => {
    return (
        <section className="article-image-section">

            <FigureImage cname='main-img' source={image} altTxt='Image' />
            <ArticleTags tags={tags} />

        </section>
    )
}

export default ArticleImageSection