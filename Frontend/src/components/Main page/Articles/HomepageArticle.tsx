import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IHomepageArticle } from '../../../interfaces/HomepageInterfaces'
import FigureImage from '../../Common/FigureImage'
import RateAndDate from './RateAndDate'
import '../../../css/HomeArticleHover.css'

const HomepageArticle = ({cname, title, likes, posted, text, image, _id, category}: IHomepageArticle) => {
    const n: NavigateFunction = useNavigate()

    return (
        <article onClick={() => n(`/article/${_id}`)} className={`art ${cname ?? ''}`}>

            <FigureImage source={image} altTxt='Article' />

            <div className="wrap-text">

                <p className="category">{category}</p>
                <p className="title">{title}</p>
                { 
                    text 
                        ? <p className="text">{text.slice(0, 150)}</p> 
                        : <></> 
                }
                <RateAndDate posted={posted} likes={likes} />

            </div>

        </article>
    )
}

export default HomepageArticle