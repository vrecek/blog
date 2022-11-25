import React from 'react'
import { IHomepageState } from '../../interfaces/HomepageInterfaces'
import LayoutWrap from '../Layout/LayoutWrap'
import EntryArticles from './EntryArticles/EntryArticles'
import HomepageHeader from './HomepageHeader/HomepageHeader'
import OneTwoArticles from './Articles/OneTwoArticles/OneTwoArticles'
import { defaultStateLoadHook, StateLoadingHook } from '../../interfaces/CommonInterfaces'
import fetchFunction from '../../functions/fetchFunction'
import Fetches from '../../functions/Fetches'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import ArticleContainer from './Articles/ArticleContainer/ArticleContainer'

const MAIN_PAGE = () => {
    const n: NavigateFunction = useNavigate()

    const [articles, setArticles] = React.useState<StateLoadingHook<IHomepageState>>(defaultStateLoadHook)

    React.useEffect(() => {
        (async () => {
            await fetchFunction<IHomepageState>(
                {url: process.env.REACT_APP_API_ARTICLE_HOMEPAGE!, type: 'GET'},
                {position: 'fixed', appendTo: document.body},

                data => {
                    setArticles({
                        finished: true,
                        data
                    })
                },

                err => {
                    n('/error', {
                        replace: true,
                        state: Fetches.returnFetchErrorState(err)
                    })
                }
            )
        })()
    }, [])

    if(articles.finished && articles.data) {
        const {latest, popular, random, tutorials, news} = articles.data

        return (
            <LayoutWrap>
    
                <main className="homepage">
    
                    <EntryArticles popular={popular} latest={latest} />
                    <HomepageHeader />
    
                    <OneTwoArticles articles={random.slice(0, 3)} cname='normal' />
                    <OneTwoArticles articles={random.slice(3, 6)} cname='reverse' />

                    <ArticleContainer articles={random.slice(6, 9)} cname='border-articles' />
                    <ArticleContainer articles={random.slice(9, 12)} cname='border-articles' />
    
                    <ArticleContainer category={{name: 'Tutorials', url: 'Tutorial'}} articles={tutorials} cname='regular-articles' />
                    <ArticleContainer category={{name: 'News', url: 'News'}} articles={news} cname='regular-articles' />
    
                </main>
    
            </LayoutWrap>
        )
    }

    return <></>
}

export default MAIN_PAGE