import React from 'react'
import { ILatestMisc } from '../../../../interfaces/HomepageInterfaces'

const LatestTextMisc = ({posted, category}: ILatestMisc) => {
    return (
        <div className="misc">

            <p className="date">{new Date(posted).toLocaleDateString()}</p>
            <p className="category">{category}</p>

        </div>
    )
}

export default LatestTextMisc