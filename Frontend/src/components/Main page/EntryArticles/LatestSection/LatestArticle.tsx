import React from 'react'
import FigureImage from '../../../Common/FigureImage'
import LatestText from './LatestText'
import { ILatest } from '../../../../interfaces/HomepageInterfaces'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const LatestArticle = ({mainImg, title, _id, category, posted}: ILatest) => {
    const n: NavigateFunction = useNavigate()

    return (
        <article onClick={() => n(`/article/${_id}`)} className="latest">

            <FigureImage source={mainImg.url} altTxt='Article' />
            <LatestText title={title} category={category} posted={posted} />

        </article>
    )
}

export default LatestArticle