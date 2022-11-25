import React from 'react'
import { ILatestText } from '../../../../interfaces/HomepageInterfaces'
import LatestTextMisc from './LatestTextMisc'

const LatestText = ({title, posted, category}: ILatestText) => {
    return (
        <div className="text">

            <p className="text">{title}</p>

            <LatestTextMisc posted={posted} category={category} />

        </div>
    )
}

export default LatestText