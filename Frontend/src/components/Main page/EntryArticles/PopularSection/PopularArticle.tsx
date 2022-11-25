import React from 'react'
import FigureImage from '../../../Common/FigureImage'
import PopularText from './PopularText'
import { ISlide } from '../../../../interfaces/HomepageInterfaces'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const PopularArticle = ({mainImg, header, title, _id}: ISlide) => {
    const n: NavigateFunction = useNavigate()

    return (
        <article onClick={() => n(`/article/${_id}`)} className="popular">

            <FigureImage source={mainImg.url} altTxt='Popular' />

            <PopularText header={header} title={title} />

        </article>
    )
}

export default PopularArticle