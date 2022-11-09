import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IHomepageArticle } from '../../../interfaces/HomepageInterfaces'
import FigureImage from '../../Common/FigureImage'
import RateAndDate from './RateAndDate'
import '../../../css/HomeArticleHover.css'

const HomepageArticle = ({cname, title, rate, date, para, image, id, category}: IHomepageArticle) => {
    const n: NavigateFunction = useNavigate()

    return (
        <article onClick={() => n(`/article/${id}`)} className={`art ${cname ?? ''}`}>

            <FigureImage source={image} altTxt='Article' />

            <div className="wrap-text">

                <p className="category">{category}</p>
                <p className="title">{title}</p>
                { para ? <p className="text">{para}</p> : <></> }
                <RateAndDate date={date} rate={rate} />

            </div>

        </article>
    )
}

export default HomepageArticle