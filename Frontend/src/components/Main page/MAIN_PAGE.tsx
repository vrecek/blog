import React from 'react'
import { IHomepageArticle } from '../../interfaces/HomepageInterfaces'
import LayoutWrap from '../Layout/LayoutWrap'
import ArticleContainer from './Articles/ArticleContainer/ArticleContainer'
import EntryArticles from './EntryArticles/EntryArticles'
import HomepageHeader from './HomepageHeader/HomepageHeader'
import img from '../../images/n3.jpg'
import OneTwoArticles from './Articles/OneTwoArticles/OneTwoArticles'

const MAIN_PAGE = () => {
    const listBorder: IHomepageArticle[] = [
        {
            category: 'Tutorial',
            image: img,
            title: 'Conqeastur dolore ipsum elit information sitt',
            para: 'Fusce congue tristique sapien, eu iaculis ligula blandit non. Maecenas congue turpis nec risus venenatis elementum. Etiam ultricies diam odio, quis elementum ex iaculis eu.',
            rate: 5,
            id: '6',
            date: 1513
        },

        {
            category: 'Tutorial',
            image: img,
            title: 'Conqeastur dolore ipsum elit information sitt',
            para: 'Fusce congue tristique sapien, eu iaculis ligula blandit non. Maecenas congue turpis nec risus venenatis elementum. Etiam ultricies diam odio, quis elementum ex iaculis eu.',
            rate: 5,
            id: '8',
            date: 1513
        },

        {
            category: 'Tutorial',
            image: img,
            title: 'Conqeastur dolore ipsum elit information sitt',
            para: 'Fusce congue tristique sapien, eu iaculis ligula blandit non. Maecenas congue turpis nec risus venenatis elementum. Etiam ultricies diam odio, quis elementum ex iaculis eu.',
            rate: 5,
            id: '9',
            date: 1513
        }
    ]

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

    const listOT1: IHomepageArticle[] = [
        {
            category: 'Tutorial',
            image: img,
            cname: 'big',
            title: 'Conqeastur dolore ipsum elit information sitt',
            para: 'Fusce congue tristique sapien, eu iaculis ligula blandit non. Maecenas congue turpis nec risus venenatis elementum. Etiam ultricies diam odio, quis elementum ex iaculis eu.',
            rate: 5,
            id: React.useId(),
            date: 1513
        },
        
        {
            category: 'Tutorial',
            cname: 'small',
            image: img,
            title: 'Conqeastur dolore ipsum elit information sitt',
            rate: 5,
            id: React.useId(),
            date: 1513
        },

        {
            category: 'Tutorial',
            cname: 'small',
            image: img,
            title: 'Conqeastur dolore ipsum elit information sitt',
            rate: 5,
            id: React.useId(),
            date: 1513
        }
    ]

    const listOT2: IHomepageArticle[] = [
        {
            image: img,
            para: 'Fusce congue tristique sapien, eu iaculis ligula blandit non. Maecenas congue turpis nec risus venenatis elementum. Etiam ultricies diam odio, quis elementum ex iaculis eu.',
            cname: 'big',
            category: 'Tutorial',
            title: 'Conqeastur dolore ipsum elit information sitt',
            rate: 5,
            id: React.useId(),
            date: 1513
        },

        {
            image: img,
            title: 'Conqeastur dolore ipsum elit information sitt',
            category: 'Tutorial',
            cname: 'small',
            rate: 5,
            id: React.useId(),
            date: 1513
        },

        {
            category: 'Tutorial',
            image: img,
            cname: 'small',
            title: 'Conqeastur dolore ipsum elit information sitt',
            rate: 5,
            id: React.useId(),
            date: 1513
        }
    ]

    return (
        <LayoutWrap>

            <main className="homepage">

                <EntryArticles />
                <HomepageHeader />

                <OneTwoArticles articles={listOT1} cname='normal' />
                <OneTwoArticles articles={listOT2} cname='reverse' />

                <ArticleContainer articles={listBorder} cname='border-articles' />

                <ArticleContainer category='Tutorials' articles={listRegular} cname='regular-articles' />
                <ArticleContainer category='News' articles={listRegular} cname='regular-articles' />
                <ArticleContainer category='CSS design' articles={listRegular} cname='regular-articles' />

            </main>

        </LayoutWrap>
    )
}

export default MAIN_PAGE