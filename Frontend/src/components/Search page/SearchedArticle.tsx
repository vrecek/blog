import React from 'react'
import FigureImage from '../Common/FigureImage'
import ISearchedArticle from '../../interfaces/SearchPageInterfaces'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import RateAndDate from '../Main page/Articles/RateAndDate'
import ImageContainer from './ImageContainer'

const SearchedArticle = ({image, _id, likes, title, category, tags, posted}: ISearchedArticle) => {
    const n: NavigateFunction = useNavigate()

    return (
        <article onClick={() => n(`/article/${_id}`)}>

            <div>

                <ImageContainer tags={tags} image={image} />

                <p className="header">{title}</p>

            </div>

            <p className="category">{category}</p>

            <RateAndDate likes={{num: likes, whoRated: []}} posted={posted} />

        </article>
    )
}

export default SearchedArticle