import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/SearchPage.css'
import Searchbar from './Searchbar'
import { defaultStateLoadHook, StateLoadingHook } from '../../interfaces/CommonInterfaces'
import ISearchedArticle from '../../interfaces/SearchPageInterfaces'
import { Location, NavigateFunction, useLocation, useNavigate, useParams } from 'react-router-dom'
import fetchFunction from '../../functions/fetchFunction'
import Fetches from '../../functions/Fetches'
import FoundContainer from './FoundContainer'
import EmptyContainer from './EmptyContainer'

const SEARCH_PAGE = () => {
    window.scrollTo(0, 0)
    
    const [articles, setArticles] = React.useState<StateLoadingHook<ISearchedArticle[]>>(defaultStateLoadHook),
          n: NavigateFunction = useNavigate(),
          loc: Location = useLocation(),
          {query, type} = useParams()


    React.useEffect(() => {
        setArticles(defaultStateLoadHook)

        ;(async () => {
            await fetchFunction<ISearchedArticle[]>(
                {url: `${process.env.REACT_APP_API_ARTICLE_SEARCH}/${type}/${query}`, type: 'GET'},
                {appendTo: document.body, position: 'fixed'},

                data => {
                    setArticles({
                        finished: true,
                        data
                    })
                },

                err => {
                    n('/error', {
                        replace: true,
                        state: Fetches.returnFetchErrorState(err).msg
                    })
                }
            )
        })()
    }, [loc])
    
    if(articles.finished && articles.data)
    return (
        <LayoutWrap>

            <main className="search-page">

                <Searchbar />

                <h1>Results for: <span>{query}</span></h1>

                <section className="container">

                    {
                        articles.data.length
                            ? <FoundContainer articles={articles.data} />
                            : <EmptyContainer />
                    }

                </section>

            </main>

        </LayoutWrap>
    )

    return <></>
}

export default SEARCH_PAGE