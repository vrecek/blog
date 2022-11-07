import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import EntryArticles from './EntryArticles/EntryArticles'
import HomepageHeader from './HomepageHeader/HomepageHeader'

const MAIN_PAGE = () => {
    return (
        <LayoutWrap>

            <main className="homepage">

                <EntryArticles />
                <HomepageHeader />

            </main>

        </LayoutWrap>
    )
}

export default MAIN_PAGE