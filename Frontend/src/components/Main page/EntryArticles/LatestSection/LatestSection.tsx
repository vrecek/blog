import React from 'react'
import { ILatest } from '../../../../interfaces/HomepageInterfaces'
import LatestArticle from './LatestArticle'

const LatestSection = ({latest}: {latest: ILatest[]}) => {
    return (
        <section className="main latest">

            <p className="header">Latest</p>

            <section className="container">
                
                {
                    latest.map((x, i) => (
                        <LatestArticle
                            key={i}
                            category={x.category}
                            title={x.title}
                            posted={x.posted}
                            mainImg={x.mainImg}
                            _id={x._id}
                        />
                    ))
                }

            </section>

        </section>
    )
}

export default LatestSection