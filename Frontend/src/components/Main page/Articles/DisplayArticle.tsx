import React from 'react'
import { IHomepageArticle } from '../../../interfaces/HomepageInterfaces'
import HomepageArticle from './HomepageArticle'

const DisplayArticle = (details: IHomepageArticle): JSX.Element => {
    const {id, title, para, image, category, date, rate, cname} = details

    return (
        <HomepageArticle
            key={id}
            id={id}
            title={title}
            para={para}
            image={image}
            category={category}
            date={date}
            rate={rate}
            cname={cname}
        />
    )
}

export default DisplayArticle