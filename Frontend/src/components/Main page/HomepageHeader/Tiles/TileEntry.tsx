import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { ITileEntry } from '../../../../interfaces/HomepageInterfaces'
import Icon from '../../../Common/Icon'

const TileEntry = ({text, icon}: ITileEntry) => {
    return (
        <div className="entry">

            <Icon>{icon}</Icon>
            {text}

        </div>
    )
}

export default TileEntry