import React from 'react'
import LatestArticle from './LatestArticle'

const LatestSection = () => {
    return (
        <section className="main latest">

            <p className="header">Latest</p>

            <section className="container">
                
                <LatestArticle />
                <LatestArticle />
                <LatestArticle />

            </section>

        </section>
    )
}

export default LatestSection