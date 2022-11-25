import React from 'react'
import ArticleImageSection from './ImageSection/ArticleImageSection'
import ContentMiscInfo from './ContentMisc/ContentMiscInfo'
import FinalSection from './FinalSection'
import TitleAndHeader from './TitleAndHeader'
import { IArticleContent } from '../../../interfaces/ArticlePageInterfaces'
import TextParagraph from './TextParagraph'
import TableOfContents from './TableOfContents'

const ArticleContent = ({main, regularArticles}: IArticleContent) => {
    const {tags, mainImg, posted, text, additionalImgs, comments, header, title, _id} = main

    return (
        <section className="main-container">

            <article className="content">

                <ArticleImageSection tags={tags} image={mainImg.url} />

                <ContentMiscInfo postedDate={posted} textLen={text.length} />

                <TitleAndHeader header={header} title={title} />

                <TableOfContents text={text} />
                
                <TextParagraph text={text} images={additionalImgs.map(x => x.url)} />

            </article>

            <FinalSection id={_id} regularArticles={regularArticles} comments={comments} />

        </section>
    )
}

export default ArticleContent