import React from 'react'
import ArticleContainer from '../../Main page/Articles/ArticleContainer/ArticleContainer'
import '../../../css/FinalSection.css'
import CommentsContainer from './Comments/CommentsContainer'
import { IFinalSection } from '../../../interfaces/ArticlePageInterfaces'

const FinalSection = ({regularArticles, comments, id}: IFinalSection) => {
    return (
        <section className='final-section'>
        
            <CommentsContainer id={id} comments={comments} />

            <p className="entry-header">Other articles</p>
            
            <ArticleContainer 
                articles={regularArticles}
                cname='article-container'
            />

        </section>
    ) 
}

export default FinalSection