import React from 'react'
import { IPopularText } from '../../../../interfaces/HomepageInterfaces'

const PopularText = ({header, para}: IPopularText) => {
    return (
        <div className="text">

            <p className='title'>{header}</p>
            <p className="text">{para}</p>

        </div>
    )
}

export default PopularText