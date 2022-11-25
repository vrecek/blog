import React from 'react'
import FigureImage from '../Common/FigureImage'
import empty from '../../images/emptysearch.png'

const EmptyContainer = () => {
    return (
        <div className="empty">

            <p>No articles found</p>
            <FigureImage source={empty} altTxt='Empty' />

        </div>
    )
}

export default EmptyContainer