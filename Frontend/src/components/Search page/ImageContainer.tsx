import React from 'react'
import { IImageContainer } from '../../interfaces/SearchPageInterfaces'
import FigureImage from '../Common/FigureImage'

const ImageContainer = ({image, tags}: IImageContainer) => {
    return (
        <div className="image-container">

            <FigureImage source={image} altTxt='Article' />

            <div className="tags">

                {
                    tags.map((x, i) => (
                        <span key={i}>{x}</span>
                    ))
                }

            </div>

        </div>
    )
}

export default ImageContainer