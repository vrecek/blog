import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/SearchPage.css'
import Searchbar from './Searchbar'
import SearchedArticle from './SearchedArticle'

const SEARCH_PAGE = () => {
    return (
        <LayoutWrap>

            <main className="search-page">

                <Searchbar />

                <h1>Results for: <span>dolore</span></h1>

                <section className="container">

                    <SearchedArticle />
                    <SearchedArticle />
                    <SearchedArticle />
                    <SearchedArticle />
                    <SearchedArticle />
                    <SearchedArticle />
                    <SearchedArticle />
                    <SearchedArticle />

                </section>

            </main>

        </LayoutWrap>
    )
}

export default SEARCH_PAGE