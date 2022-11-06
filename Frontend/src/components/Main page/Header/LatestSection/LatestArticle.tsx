import React from 'react'
import FigureImage from '../../../Common/FigureImage'
import img from '../../../../images/n1.jpg'
import LatestText from './LatestText'

const LatestArticle = () => {
    return (
        <article className="latest">

            <FigureImage source={img} altTxt='Article' />
            <LatestText />

        </article>
    )
}

export default LatestArticle