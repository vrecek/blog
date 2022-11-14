import React from 'react'
import { IHomepageArticle } from '../../../interfaces/HomepageInterfaces'
import img from '../../../images/n2.jpg'
import ArticleContainer from '../../Main page/Articles/ArticleContainer/ArticleContainer'
import '../../../css/FinalSection.css'
import CommentsContainer from './Comments/CommentsContainer'

const FinalSection = () => {
    const listRegular: IHomepageArticle[] = [
        {
            category: 'Tutorial',
            image: img,
            title: 'Conqeastur dolore ipsum elit information sitt',
            para: 'Fusce congue tristique sapien, eu iaculis ligula blandit non. Maecenas congue turpis nec risus venenatis elementum. Etiam ultricies diam odio, quis elementum ex iaculis eu.',
            rate: 5,
            id: '11',
            date: 1513
        },

        {
            category: 'Tutorial',
            image: img,
            title: 'Conqeastur dolore ipsum elit information sitt',
            para: 'Fusce congue tristique sapien, eu iaculis ligula blandit non. Maecenas congue turpis nec risus venenatis elementum. Etiam ultricies diam odio, quis elementum ex iaculis eu.',
            rate: 5,
            id: '12',
            date: 1513
        },

        {
            category: 'Tutorial',
            image: img,
            title: 'Conqeastur dolore ipsum elit information sitt',
            para: 'Fusce congue tristique sapien, eu iaculis ligula blandit non. Maecenas congue turpis nec risus venenatis elementum. Etiam ultricies diam odio, quis elementum ex iaculis eu.',
            rate: 5,
            id: '13',
            date: 1513
        },

        {
            category: 'Tutorial',
            image: img,
            title: 'Conqeastur dolore ipsum elit information sitt',
            para: 'Fusce congue tristique sapien, eu iaculis ligula blandit non. Maecenas congue turpis nec risus venenatis elementum. Etiam ultricies diam odio, quis elementum ex iaculis eu.',
            rate: 5,
            id: '14',
            date: 1513
        },

        {
            category: 'Tutorial',
            image: img,
            title: 'Conqeastur dolore ipsum elit information sitt',
            para: 'Fusce congue tristique sapien, eu iaculis ligula blandit non. Maecenas congue turpis nec risus venenatis elementum. Etiam ultricies diam odio, quis elementum ex iaculis eu.',
            rate: 5,
            id: '15',
            date: 1513
        }
    ]

    return (
        <section className='final-section'>
        
            <CommentsContainer />

            <p className="entry-header">Other articles</p>
            
            <ArticleContainer 
                articles={listRegular}
                cname='article-container'
            />

        </section>
    ) 
}

export default FinalSection