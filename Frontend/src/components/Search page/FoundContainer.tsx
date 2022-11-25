import React from 'react'
import ISearchedArticle from '../../interfaces/SearchPageInterfaces'
import SearchedArticle from './SearchedArticle'

const FoundContainer = ({articles}: {articles: ISearchedArticle[]}) => {
    return (
        <>
            {
                articles.map(x => (
                    <SearchedArticle
                        key={x._id}
                        title={x.title}
                        category={x.category}
                        _id={x._id}
                        image={x.image}
                        likes={x.likes}
                        posted={x.posted}
                        tags={x.tags}
                    />
                ))
            }
        </>
    )
}

export default FoundContainer