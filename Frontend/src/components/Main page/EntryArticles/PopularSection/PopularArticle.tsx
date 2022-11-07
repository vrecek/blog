import React from 'react'
import FigureImage from '../../../Common/FigureImage'
import PopularText from './PopularText'
import { ISlide } from '../../../../interfaces/HomepageInterfaces'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const PopularArticle = ({image, header, para, id}: ISlide) => {
    const n: NavigateFunction = useNavigate()

    return (
        <article onClick={() => n(`/article/${id}`)} className="popular">

            <FigureImage source={image} altTxt='Popular' />

            <PopularText header={header} para={para} />

        </article>
    )
}

export default PopularArticle