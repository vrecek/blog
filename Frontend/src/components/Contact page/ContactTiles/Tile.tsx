import React from 'react'
import { ITile } from '../../../interfaces/ContactPageInterfaces'
import Icon from '../../Common/Icon'

const Tile = ({icon, header, text}: ITile) => {
    return (
        <div className="tile">

            <div>
                <Icon>{icon}</Icon>
            </div>

            <p className="header">{header}</p>
            <p className='text'>{text}</p>

        </div>
    )
}

export default Tile