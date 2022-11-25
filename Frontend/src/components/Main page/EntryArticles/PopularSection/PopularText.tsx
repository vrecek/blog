import React from 'react'
import { IPopularText } from '../../../../interfaces/HomepageInterfaces'

const PopularText = ({header, title}: IPopularText) => {
    return (
        <div className="text">

            <p className='title'>{title}</p>
            <p className="text">{header}</p>

        </div>
    )
}

export default PopularText