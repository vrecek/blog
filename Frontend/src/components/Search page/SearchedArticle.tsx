import React from 'react'
import FigureImage from '../Common/FigureImage'
import img from '../../images/n3.jpg'

const SearchedArticle = () => {
    return (
        <article>

            <FigureImage source={img} altTxt='Article' />
            <p className="header">Lotem ipsum dolorsit amet conqestur</p>
            <p className="category">Tutorial</p>
            <p className="date">Today</p>

        </article>
    )
}

export default SearchedArticle