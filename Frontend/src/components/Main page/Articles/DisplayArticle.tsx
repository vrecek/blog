import React from 'react'
import { IHomepageArticle } from '../../../interfaces/HomepageInterfaces'
import HomepageArticle from './HomepageArticle'

const DisplayArticle = (details: IHomepageArticle): JSX.Element => {
    const {_id, title, text, image, category, posted, likes, cname} = details

    return (
        <HomepageArticle
            key={_id}
            _id={_id}
            title={title}
            text={text}
            image={image}
            category={category}
            posted={posted}
            likes={likes}
            cname={cname}
        />
    )
}

export default DisplayArticle